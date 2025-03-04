import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const name = "taifur";
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button variant={"destructive"}>Click me</Button>
      </div>
    </div>
  );
}
