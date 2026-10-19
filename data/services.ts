export type ServiceType = "external" | "internal";

export interface Service {
  id: string;
  name: string;
  description: string;
  logo: string;
  type: ServiceType;
  url: string;
  sortOrder: number;
  isActive: boolean;
}

export const services = [
  {
    id: "jinju-logis",
    name: "진주로지스",
    description: "출고와 배송 진행 상황을 한 화면에서 확인하는 물류 서비스",
    logo: "/logos/jinju-logis.svg",
    type: "external",
    url: "https://example.com/jinju-logis",
    sortOrder: 1,
    isActive: true,
  },
  {
    id: "clear-settle",
    name: "결제안심",
    description: "거래 대금과 정산 내역을 정리해 보여주는 정산 서비스",
    logo: "/logos/clear-settle.svg",
    type: "external",
    url: "https://example.com/clear-settle",
    sortOrder: 2,
    isActive: true,
  },
  {
    id: "talent-bridge",
    name: "인재브릿지",
    description: "채용 공고와 지원 현황을 함께 관리하는 인사 서비스",
    logo: "/logos/talent-bridge.svg",
    type: "external",
    url: "https://example.com/talent-bridge",
    sortOrder: 3,
    isActive: true,
  },
  {
    id: "field-care",
    name: "현장케어",
    description: "설비 점검 일정과 처리 상태를 기록하는 유지보수 서비스",
    logo: "/logos/field-care.svg",
    type: "external",
    url: "https://example.com/field-care",
    sortOrder: 4,
    isActive: true,
  },
  {
    id: "report-lab",
    name: "리포트랩",
    description: "주요 경영 수치를 요약해 전달하는 보고서 서비스",
    logo: "/logos/report-lab.svg",
    type: "external",
    url: "https://example.com/report-lab",
    sortOrder: 5,
    isActive: true,
  },
] satisfies Service[];

export function getActiveServices(): Service[] {
  return services
    .filter((service) => service.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}
