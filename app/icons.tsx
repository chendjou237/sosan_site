type IconProps = {
  className?: string;
  size?: number;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCross({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base} strokeWidth={2.4}>
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="4" y1="12" x2="20" y2="12" />
    </svg>
  );
}

export function IconVideoCall({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <rect x="3" y="5" width="13" height="10" rx="2" />
      <path d="M16 9.5 21 7v6l-5-2.5" />
      <line x1="8" y1="19" x2="12" y2="19" />
      <line x1="9.5" y1="15" x2="9.5" y2="19" />
    </svg>
  );
}

export function IconCreditCard({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <line x1="2.5" y1="9.5" x2="21.5" y2="9.5" />
      <line x1="5.5" y1="15" x2="10.5" y2="15" />
    </svg>
  );
}

export function IconUsers({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17.5" cy="9" r="2.4" />
      <path d="M15 19c0-2.2 1.6-3.9 3.6-4.3" />
    </svg>
  );
}

export function IconShield({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconMessageCircle({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.1-3.4A7.96 7.96 0 0 1 4 12z" />
    </svg>
  );
}

export function IconFlask({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3" />
      <line x1="7.5" y1="15" x2="16.5" y2="15" />
    </svg>
  );
}

export function IconCalendarCheck({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <rect x="3" y="5" width="18" height="15" rx="2" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <line x1="7.5" y1="3" x2="7.5" y2="7" />
      <line x1="16.5" y1="3" x2="16.5" y2="7" />
      <path d="M8.5 14.5l2 2 4.5-4.5" />
    </svg>
  );
}

export function IconMapPin({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <path d="M12 22s8-7.58 8-13a8 8 0 1 0-16 0c0 5.42 8 13 8 13z" />
      <circle cx="12" cy="9" r="2.6" />
    </svg>
  );
}

export function IconGlobe({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

export function IconMail({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3 6.5l9 6.5 9-6.5" />
    </svg>
  );
}

export function IconCheckCircle({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5 5.5-6" />
    </svg>
  );
}
