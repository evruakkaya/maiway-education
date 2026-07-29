"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsSubmitted(false);
    onClose();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  if (!isMounted || !isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-white/55
        px-5
        py-10
        backdrop-blur-[10px]
      "
      onMouseDown={closeModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="
          relative
          my-auto
          w-full
          max-w-[560px]
          rounded-[16px]
          bg-white
          p-8
          shadow-[0_24px_80px_rgba(0,0,0,0.16)]
        "
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="İletişim formunu kapat"
          className="
            absolute
            top-5
            right-5
            flex
            h-8
            w-8
            cursor-pointer
            items-center
            justify-center
            rounded-full
            text-[24px]
            leading-none
            text-[#6B6B6B]
            transition-colors
            hover:bg-black/5
            hover:text-black
          "
        >
          ×
        </button>

        {isSubmitted ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF1FF] text-[32px] font-semibold text-[#1460F5]">
              ✓
            </div>

            <h2 className="mt-6 text-[32px] font-semibold leading-[38px] tracking-[-1.6px] text-black">
              Mesajınız alındı.
            </h2>

            <p className="mt-3 max-w-[380px] text-[18px] leading-[27px] text-[#5A5A5A]">
              Eğitim hedeflerinizi inceleyip en kısa sürede sizinle iletişime
              geçeceğiz.
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="
                mt-8
                h-[52px]
                rounded-full
                bg-[#1460F5]
                px-10
                text-[16px]
                font-semibold
                text-white
                transition-colors
                hover:bg-[#0C4ED6]
              "
            >
              Kapat
            </button>
          </div>
        ) : (
          <>
            <div className="pr-10">
              <h2
                id="contact-modal-title"
                className="text-[36px] font-semibold leading-[40px] tracking-[-1.8px] text-black"
              >
                Bize ulaşın.
              </h2>

              <p className="mt-2 text-[18px] leading-[27px] text-[#5A5A5A]">
                Eğitim hedeflerinizi konuşalım, size en uygun yolu birlikte
                belirleyelim.
              </p>
            </div>

            <form
              className="mt-8 flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Adınız"
                  required
                  className="
                    h-[52px]
                    w-full
                    rounded-full
                    border
                    border-[#E5E5E5]
                    px-5
                    text-[16px]
                    text-black
                    outline-none
                    transition-colors
                    placeholder:text-[#969696]
                    focus:border-[#1460F5]
                  "
                />

                <input
                  type="text"
                  name="surname"
                  placeholder="Soyadınız"
                  required
                  className="
                    h-[52px]
                    w-full
                    rounded-full
                    border
                    border-[#E5E5E5]
                    px-5
                    text-[16px]
                    text-black
                    outline-none
                    transition-colors
                    placeholder:text-[#969696]
                    focus:border-[#1460F5]
                  "
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="E-mail adresiniz"
                required
                className="
                  h-[52px]
                  w-full
                  rounded-full
                  border
                  border-[#E5E5E5]
                  px-5
                  text-[16px]
                  text-black
                  outline-none
                  transition-colors
                  placeholder:text-[#969696]
                  focus:border-[#1460F5]
                "
              />

              <textarea
                name="message"
                placeholder="Size nasıl yardımcı olabiliriz?"
                required
                className="
                  min-h-[150px]
                  w-full
                  resize-none
                  rounded-[24px]
                  border
                  border-[#E5E5E5]
                  p-5
                  text-[16px]
                  text-black
                  outline-none
                  transition-colors
                  placeholder:text-[#969696]
                  focus:border-[#1460F5]
                "
              />

              <button
                type="submit"
                className="
                  mt-3
                  h-[52px]
                  w-full
                  cursor-pointer
                  rounded-full
                  bg-[#1460F5]
                  text-[16px]
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#0C4ED6]
                "
              >
                Gönder
              </button>

              <p className="text-center text-[12px] leading-[18px] text-[#8A8A8A]">
                Formu göndererek iletişim amacıyla sizinle bağlantı kurulmasını
                kabul etmiş olursunuz.
              </p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}