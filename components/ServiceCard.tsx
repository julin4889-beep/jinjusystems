import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { resolveServiceLink } from "@/lib/service-link";

const actionClassName =
  "mt-4 inline-flex items-center justify-center self-center rounded-full bg-brand px-5 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export function ServiceCard({ service }: { service: Service }) {
  const link = resolveServiceLink(service);
  const ariaLabel = `${service.name} 바로가기`;

  return (
    <article className="flex h-full min-h-[236px] flex-col rounded-md border border-neutral-200 bg-white px-3 py-5 text-center transition-shadow duration-200 hover:shadow-md sm:px-4 sm:py-6">
      <div className="flex h-10 items-center justify-center">
        <Image
          src={service.logo}
          alt=""
          width={148}
          height={40}
          className="h-8 w-auto max-w-[140px] object-contain sm:h-9"
        />
      </div>
      <h3 className="mt-3 text-base font-semibold text-neutral-900">{service.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-5 text-neutral-500">
        {service.description}
      </p>
      {link.type === "internal" ? (
        <Link href={link.href} className={actionClassName} aria-label={ariaLabel}>
          바로가기
        </Link>
      ) : (
        <a
          href={link.href}
          className={actionClassName}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          바로가기
        </a>
      )}
    </article>
  );
}
