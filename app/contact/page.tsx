import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description: "JINJU SYSTEMS 문의",
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h1 className="text-3xl font-semibold text-neutral-900">문의하기</h1>
        <p className="mt-6 text-base leading-8 text-neutral-600">
          서비스 문의 페이지는 준비 중입니다.
        </p>
        <p className="mt-4 text-base leading-8 text-neutral-600">
          연락처가 정해지면 이 페이지에서 안내하겠습니다.
        </p>
      </div>
    </section>
  );
}
