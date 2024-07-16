"use client";

import { useState } from "react";
import Image from "next/image";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일 어떻게 보내지
    console.log("Submitted:", { email, message });
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full flex mt-10">
      <div className="w-full md:w-1/2 p-8 space-y-2">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-slate-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-1 block w-full rounded-md shadow-sm border"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-slate-500">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 p-1 block w-full rounded-md shadow-sm border"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#B78570] text-white py-2 px-4 rounded-md hover:bg-[#815847] transition duration-300"
          >
            보내기
          </button>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-[#FFF6EE] p-8">
        <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
        <p>
          다양한 사람들과 의견을 교류하며 배우고 협업하는 것을 좋아해요.
        </p>
        <p className="text-xs text-slate-500 mb-4">
            귀여운 고양이 사진 보고 가세요!
        </p>
        <div className="relative w-full h-64">
          <Image
            src="/cute_cat2.jpg"
            alt="달콩이"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
