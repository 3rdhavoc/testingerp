'use client';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function StudentTableLayout({ children }: LayoutProps) {
  return (
    <div>
      
      <main>{children}</main>
    </div>
  );
}
