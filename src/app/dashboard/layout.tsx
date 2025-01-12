interface LayoutProps {
  children: React.ReactNode;
}

export default function Dashboard({ children }: LayoutProps) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
