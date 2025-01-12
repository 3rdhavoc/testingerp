interface LayoutProps {
  children: React.ReactNode;
}

export default function StudentTableLayout({ children }: LayoutProps) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
