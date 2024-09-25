import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../core/Avatar";
import Button from "../core/Button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../core/HoverCard";
import logo from "../../img/costs_logo.png";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@edududs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={logo} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@edududs</h4>
            <p className="text-sm">Este é um texto genérico de teste.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
