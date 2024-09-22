import React from "react";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
} from "./Command";

interface ICommand {
  label: string;
  action: () => void;
}

interface SimpleCommandProps {
  onExecute: (action: () => void) => void;
  commands: ICommand[];
  placeholder?: string;
  dialogProps?: React.ComponentProps<typeof CommandDialog>;
}

const SimpleCommand: React.FC<SimpleCommandProps> = ({
  onExecute,
  commands,
  placeholder = "Digite um comando...",
  dialogProps = {},
}) => (
  <CommandDialog {...dialogProps}>
    <CommandInput placeholder={placeholder} />
    <CommandList>
      {commands.length === 0 ? (
        <CommandEmpty />
      ) : (
        commands.map((cmd, idx) => (
          <CommandGroup key={idx}>
            <CommandItem onSelect={() => onExecute(cmd.action)}>
              {cmd.label}
            </CommandItem>
          </CommandGroup>
        ))
      )}
      <CommandSeparator />
    </CommandList>
  </CommandDialog>
);

export default SimpleCommand;
