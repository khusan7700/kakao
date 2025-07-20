import StateAuth from "./_component/state";
import Social from "./_component/social";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import { SiKakaotalk } from "react-icons/si";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/");

  return (
    <div className="container max-w-md w-full h-screen flex justify-center items-center flex-col space-y-4">
      <SiKakaotalk size={120} className="text-yellow-400" />
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold">Kakao chatting</h1>
        <ModeToggle />
      </div>
      <StateAuth />
      <Social />
    </div>
  );
};

export default Page;
