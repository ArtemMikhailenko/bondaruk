"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

export type ModalType = "consultation" | null;

interface ModalContextValue {
  open: ModalType;
  openConsultation: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<ModalType>(null);

  const openConsultation = useCallback(() => setOpen("consultation"), []);
  const close = useCallback(() => setOpen(null), []);

  const value = useMemo(() => ({ open, openConsultation, close }), [open, openConsultation, close]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
