export function Banner() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-5 text-center sm:py-6">
        <p className="text-xs font-semibold tracking-[0.14em] text-brand">
          JINJU SYSTEMS
        </p>
        <h1 className="mt-1.5 text-lg font-semibold leading-snug text-neutral-900 sm:text-xl">
          기업 운영에 필요한 서비스를 한곳에서 안내합니다
        </h1>
        <p className="mx-auto mt-1.5 max-w-xl text-sm leading-6 text-neutral-600">
          물류, 정산, 인사, 현장 관리, 경영 보고 서비스를 확인하고 바로
          이동할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
