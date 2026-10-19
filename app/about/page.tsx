import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개",
  description: "JINJU SYSTEMS 회사 소개",
};

export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h1 className="text-3xl font-semibold text-neutral-900">회사소개</h1>
        <p className="mt-6 text-base leading-8 text-neutral-600">
          JINJU SYSTEMS는 기업이 업무에 필요한 서비스를 쉽게 찾고 이동할 수
          있도록 만든 서비스 안내 포털입니다.
        </p>
        <p className="mt-4 text-base leading-8 text-neutral-600">
          회사 세부 정보는 준비되는 대로 이 페이지에 안내하겠습니다.
        </p>
      </div>
    </section>
  );
}
