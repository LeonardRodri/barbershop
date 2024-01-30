"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Buscaque por uma barbearia" />
      <Button variant="default" size="icon">
        <SearchIcon size={18}></SearchIcon>
      </Button>
    </div>
  );
};

export default Search;
