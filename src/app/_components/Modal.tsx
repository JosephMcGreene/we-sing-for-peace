"use client";
import { ReactNode } from "react";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <article onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 relative min-w-[320px] max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white cursor-pointer"
          aria-label="Close"
        >
          ×
        </button>

        {children}
      </article>
    </div>
  );
}
