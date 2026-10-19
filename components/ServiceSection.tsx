import { ServiceCard } from "@/components/ServiceCard";
import { getActiveServices } from "@/data/services";

export function ServiceSection() {
  const items = getActiveServices();

  return (
    <section id="services" className="scroll-mt-16 bg-surface px-4 py-7 sm:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            SERVICE
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            업무에 필요한 서비스를 선택하고 해당 사이트로 이동할 수 있습니다.
          </p>
        </div>

        <ul className="mt-5 grid list-none grid-cols-1 gap-3 p-0 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {items.map((service) => (
            <li key={service.id} className="h-full">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
