export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t">
      <div className="container max-w-5xl mx-auto px-6 py-8">
        <p className="text-sm text-muted-foreground text-center" data-testid="text-footer-copyright">
          © {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
