export const metadata = {
  title: 'Salus - Support Service Platform',
  description: 'Support service platform for autistic and disabled children in Bangladesh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
