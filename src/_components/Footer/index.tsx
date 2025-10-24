import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="w-full px-4 py-8">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          @2025, Desenvolvido por{" "}
          <span className="text-primary font-semibold">Gabriel Labritz</span>
        </p>
        <div className="flex items-center gap-4 text-primary">
          <Link href="https://www.linkedin.com/in/gabriel-labritz-199499229">
            <Linkedin />
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link href="https://github.com/Gabriel-Labritz">
            <Github />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.instagram.com/gabriel_labritz/">
            <Instagram />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
