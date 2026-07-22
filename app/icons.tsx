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

export function IconHospital({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <rect x="4" y="3.5" width="16" height="17.5" rx="1.5" />
      <line x1="2.5" y1="21" x2="21.5" y2="21" />
      <path d="M12 6.5v4M10 8.5h4" />
      <path d="M10.5 21v-3a1.5 1.5 0 0 1 3 0v3" />
    </svg>
  );
}

export function IconPill({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <rect x="2.8" y="8" width="18.4" height="8" rx="4" transform="rotate(-45 12 12)" />
      <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
    </svg>
  );
}

export function IconHeartHand({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <path d="M11.5 6.9a2.3 2.3 0 0 0-3.3 0 2.3 2.3 0 0 0 0 3.3l3.3 3.2 3.3-3.2a2.3 2.3 0 0 0 0-3.3 2.3 2.3 0 0 0-3.3 0z" />
      <path d="M3.5 14.5v2.5a3 3 0 0 0 3 3h7a3 3 0 0 0 2.1-.9L20.5 15.5" />
    </svg>
  );
}

export function IconWallet({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 6.5V6a2 2 0 0 1 2-2h11" />
      <path d="M16 10.5h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3a1.5 1.5 0 0 1 0-3z" />
    </svg>
  );
}

export function IconFile({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <path d="M6 3h7l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M13 3v5h5" />
      <path d="M8.5 13h7M8.5 16.5h7M8.5 9.5h2.5" />
    </svg>
  );
}

export function IconSparkles({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <path d="M11 3l1.7 4.3L17 9l-4.3 1.7L11 15l-1.7-4.3L5 9l4.3-1.7z" />
      <path d="M17.5 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
    </svg>
  );
}

export function IconNewspaper({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...base}>
      <path d="M4 5.5h13a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V7" />
      <path d="M18 8h2a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2" />
      <path d="M7 9h7M7 12.5h7M7 16h4" />
    </svg>
  );
}
