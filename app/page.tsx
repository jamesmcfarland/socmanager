import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-2">
      <h1 className="text-3xl">
        welcome to <span className="font-bold">socmanager</span>
      </h1>
      <Button>
        <Link href="/signup">Sign up</Link>
      </Button>
      <Button>
        <Link href="/signin">Sign in</Link>
      </Button>
      <Button>
        <SignOutButton />
      </Button>
      <Button>
        <Link href="/dashboard/1">Dashboard (1)</Link>
      </Button>
      <Button>
        <Link href="/dashboard/2">Dashboard (2)</Link>
      </Button>
      <Button>
        <Link href="/dashboard/3">Dashboard (3)</Link>
      </Button>
    </main>
  );
}
