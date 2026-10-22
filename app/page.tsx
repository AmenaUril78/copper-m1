import Image from "next/image";
import { SiteFooter } from "@/components/copper/site-footer";
import { SiteHeader } from "@/components/copper/site-header";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/copper/catalog";

export default function Home() {
  const products = getProducts();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section
          id="top"
          data-testid="hero"
          className="bg-secondary text-secondary-foreground"
        >
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
            <div className="flex flex-col items-start gap-5">
              <h1 className="text-4xl font-bold md:text-5xl">
                AI-first devices, made in Arizona
              </h1>
              <p className="text-lg">From raw ideas to refined answers.</p>
              <Button asChild size="lg">
                <a href="#products">See products</a>
              </Button>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              {products.map((product) => (
                <Image
                  key={product.id}
                  src={product.cutout}
                  alt={`${product.name} ${product.type}`}
                  width={1254}
                  height={1254}
                  priority
                  className="h-auto w-full"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
