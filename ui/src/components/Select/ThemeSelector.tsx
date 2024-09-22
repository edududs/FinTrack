import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import { cn } from "../../lib/utils";

interface ThemeSelectorProps {
  onThemeChange?: (theme: string | undefined) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onThemeChange }) => {
  const [selectedTheme, setSelectedTheme] = useState<string | undefined>(
    "light"
  );

  // Função para aplicar o tema na raiz do documento
  const applyTheme = (theme: string) => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else if (theme === "system") {
      // Verifica a preferência do sistema para dark mode
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      applyTheme(systemTheme);
    }
  };

  const handleSelectChange = (value: string) => {
    setSelectedTheme(value);
  };

  useEffect(() => {
    if (onThemeChange) {
      onThemeChange(selectedTheme);
    }

    // Aplica o tema selecionado
    if (selectedTheme) {
      applyTheme(selectedTheme);
    }
  }, [selectedTheme]);

  useEffect(() => {
    // Ao carregar o componente, tenta carregar o tema salvo no localStorage ou o sistema
    const storedTheme = localStorage.getItem("theme") || "system";
    setSelectedTheme(storedTheme);

    if (storedTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      applyTheme(systemTheme);
    } else {
      applyTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Salva o tema no localStorage sempre que ele mudar
    if (selectedTheme) {
      localStorage.setItem("theme", selectedTheme);
    }
  }, [selectedTheme]);

  return (
    <div className="flex flex-col justify-center items-center max-w-[50rem] gap-2">
      <Select value={selectedTheme} onValueChange={handleSelectChange}>
        <SelectTrigger className={cn("w-[180px]", "additional-class")}>
          <SelectValue placeholder="Selecione o Tema" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSelector;
