import { Logo } from "@/components/copper/logo";

export function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo className="w-36" />
        <p className="text-muted-foreground text-sm">
          Fictional — for educational use.
        </p>
      </div>
    </footer>
  );
}
