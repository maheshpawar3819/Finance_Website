import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton/>
      <p>this is an authenticated route</p>
    </div>
  );
}


