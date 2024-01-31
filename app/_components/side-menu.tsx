import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const SideMenu = () => {
  const { data, status } = useSession();
  const handleLogoutClick = () => signOut();
  const handleLoginClick = () => signIn("google");
  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {data?.user ? (
        <div className="flex justify-between items-center px-5 py-6">
          <div className="flex items-center gap-3 ">
            <Avatar>
              <AvatarImage src={data.user?.image ?? ""} />
            </Avatar>
            <h2 className="font-bold text-sm">{data.user.name}</h2>
          </div>
          <Button onClick={handleLogoutClick} variant={"secondary"} size="icon">
            <LogOutIcon />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col px-5 py-6 gap-3">
          <div className="flex items-center gap-2">
            <UserIcon size={32}></UserIcon>
            <h2 className="font-bold">Faça seu login</h2>
          </div>
          <Button
            onClick={handleLoginClick}
            className="w-full justify-start"
            variant={"secondary"}
          >
            <LogInIcon className="mr-2" size={18} />
            Fazer login
          </Button>
        </div>
      )}
      <div className="flex flex-col gap-3 px-5">
        <Button className="justify-start" variant="outline" asChild>
          <Link href="/">
            <HomeIcon size={18} className="mr-2"></HomeIcon>
            Inicio
          </Link>
        </Button>

        {data?.user && (
          <Button className="justify-start" variant="outline" asChild>
            <Link href="/bookings">
              <CalendarIcon size={18} className="mr-2" />
              Agendamentos
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
