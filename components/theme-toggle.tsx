"use client";

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/BigSwitch";

export function ModeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    if (!mounted) return null;

    const isDarkMode = theme === "dark" || (systemTheme === "dark" && theme === "system");

    return (
        <Switch
            checked={isDarkMode}
            onCheckedChange={toggleTheme}
            aria-label="Toggle theme"
            className=""
        />
    );
}
