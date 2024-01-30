import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/log.jpg" alt="FSW BARBER" height={10} width={50}></Image>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon size={16}></MenuIcon>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
