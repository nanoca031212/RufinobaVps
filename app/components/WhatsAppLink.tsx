"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { WHATSAPP_LINK } from "@/app/lib/constants";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

interface WhatsAppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export default function WhatsAppLink({
  children,
  ...rest
}: WhatsAppLinkProps) {
  return (
    <a
      {...rest}
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        window.gtag_report_conversion?.(WHATSAPP_LINK);
      }}
    >
      {children}
    </a>
  );
}
