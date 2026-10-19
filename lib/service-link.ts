import type { Service } from "@/data/services";

export interface ExternalServiceLink {
  type: "external";
  href: string;
}

export interface InternalServiceLink {
  type: "internal";
  href: string;
}

export type ServiceLink = ExternalServiceLink | InternalServiceLink;

export function resolveServiceLink(
  service: Pick<Service, "type" | "url">,
): ServiceLink {
  if (service.type === "internal") {
    return {
      type: "internal",
      href: service.url.startsWith("/") ? service.url : `/${service.url}`,
    };
  }

  return {
    type: "external",
    href: service.url,
  };
}
