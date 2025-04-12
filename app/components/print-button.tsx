'use client';

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function PrintButton({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const printRef = useReactToPrint({
    documentTitle: 'Matt Tai Resume',
  });

  return (
    <>
      <main  className="resume max-w-5xl mx-auto card border border-gray-300 hover:shadow-md transition-all bg-base-100 print:border-0 dark:shadow-white">
        <div ref={contentRef} className="card-body md:!p-10 print:bg-white">
          {children}
        </div>
      </main>
      <div className="fixed bottom-4 right-4 z-50 print:hidden">
        <button
          className="btn btn-sm"
          onClick={() => printRef(() => contentRef?.current)}
        >
          Print
        </button>
      </div>
    </>
  );
}