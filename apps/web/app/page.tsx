import { Button } from "@repo/ui/components/ui/button";

export default function Home() {
  return (
    <div>
      <main>
        <Button size={"sm"} className="text-sm">
          Click Me
        </Button>
        <Button size={"lg"} className="bg-red-500">
          Click Me
        </Button>
      </main>
    </div>
  );
}
