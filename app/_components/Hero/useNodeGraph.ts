"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const NODE_COUNT = 18;
const CONNECT_DIST = 180;
const REPEL_DIST = 130;
const REPEL_FORCE = 0.5;
const BASE_SPEED = 0.28;

export function useNodeGraph(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  const prefersReducedMotion = useReducedMotion();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio ?? 1;

    const setSize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initNodes = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * BASE_SPEED * 2,
        vy: (Math.random() - 0.5) * BASE_SPEED * 2,
        radius: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.35 + 0.25,
      }));
    };

    setSize();
    initNodes();

    const handleResize = () => {
      setSize();
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const tick = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      for (const node of nodes) {
        // Mouse repulsion
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_DIST && dist > 0) {
          const force = ((REPEL_DIST - dist) / REPEL_DIST) * REPEL_FORCE;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Damping
        node.vx *= 0.97;
        node.vy *= 0.97;

        // Speed floor so nodes don't fully stop
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed < BASE_SPEED * 0.3) {
          const angle = Math.random() * Math.PI * 2;
          node.vx += Math.cos(angle) * BASE_SPEED * 0.15;
          node.vy += Math.sin(angle) * BASE_SPEED * 0.15;
        }

        // Speed cap
        if (speed > BASE_SPEED * 5) {
          node.vx = (node.vx / speed) * BASE_SPEED * 5;
          node.vy = (node.vy / speed) * BASE_SPEED * 5;
        }

        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x < 0) { node.x = 0; node.vx = Math.abs(node.vx); }
        if (node.x > w) { node.x = w; node.vx = -Math.abs(node.vx); }
        if (node.y < 0) { node.y = 0; node.vy = Math.abs(node.vy); }
        if (node.y > h) { node.y = h; node.vy = -Math.abs(node.vy); }
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const node of nodes) {
        // Glow
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 5
        );
        glow.addColorStop(0, `rgba(99, 102, 241, ${node.opacity})`);
        glow.addColorStop(1, `rgba(99, 102, 241, 0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${node.opacity + 0.3})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    if (prefersReducedMotion) {
      // Static snapshot — draw once
      tick();
    } else {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [canvasRef, prefersReducedMotion]);
}
