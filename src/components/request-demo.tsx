'use client';
import { Button } from '@/components/ui/button';
import React from 'react';

export function RequestDemo({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <Button
      className={className}
      onClick={() => {
        // @ts-ignore
        window?.Tally.openPopup('3E86dL', {
          layout: 'modal', // Open as a centered modal
        });
      }}
    >
      {label}
    </Button>
  );
}
