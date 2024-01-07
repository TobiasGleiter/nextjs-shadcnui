import { NewsletterInvitation } from "@/components/form/newsletter-invitation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <section className="py-12 flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl font-bold">Shadcn is awesome</h1>
        <p className="text-2xl text-muted-foreground">
          Some text that can be intresting....
        </p>
        <div className="flex gap-6 py-6 items-center justify-center">
          <Link href={"/about"}>
            <Button variant={"secondary"}>Learn More</Button>
          </Link>
          <Button>Enroll now</Button>
        </div>
      </section>
      <section className="py-12 flex flex-col gap-8 items-center text-center">
        <NewsletterInvitation />
      </section>
    </main>
  );
}
