export const metadata = {
  title: "TUSG CRM",
  description: "TUSG Customer Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
