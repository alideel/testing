import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserPreviewer({
  name,
  description,
  src,
}: {
  name: string;
  description: string;
  src: string;
}) {
  return (
    <div className="flex gap-3 items-center">
      <Avatar className="w-8 h-8">
        <AvatarImage src={src} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    </div>
  );
}
