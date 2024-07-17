"use client";

import emailjs from "@emailjs/browser";
import { HiChevronRight } from "react-icons/hi";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.currentTarget,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      )
      .then(
        (response) => {
          alert("메일 발송 성공!")
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.error(err)
        },
      );


    e.target.reset();
  }

  return (
    <section className="bg-yellow-500">
      <div className="relative mx-auto my-10 w-2/3 rounded-3xl bg-white py-12 shadow-lg md:w-1/2 px-6 sm:px-12">
        <div className="mx-auto max-w-md py-6 md:py-0">
          <h1 className="text-4xl font-bold underline decoration-slate-200 underline-offset-8">
            Contact
          </h1>
          <form onSubmit={sendEmail} className="mt-10 space-y-2 text-lg">
            <label
              className="mb-2 text-sm font-bold tracking-wide"
              htmlFor="name"
            >
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              required
              id="name"
              type="text"
              name="name"
              placeholder="이름"
            />

            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-first-name"
            >
              이메일 <span className="text-red-500">*</span>
            </label>
            <input
              required
              id="grid-first-name"
              type="email"
              name="email"
              placeholder="이메일"
            />

            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-first-name"
            >
              메세지 <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              placeholder="메세지를 입력하세요."
              cols={30}
              rows={4}
              name="message"
            ></textarea>

            <div className="group">
              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-10 rounded-full bg-black px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-yellow-900"
              >
                보내기
                <div className="flex size-6 items-center justify-center rounded-full bg-white duration-200 group-hover:rotate-90">
                  <HiChevronRight className="size-6 fill-black" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
