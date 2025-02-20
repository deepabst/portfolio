import { ClientNavLink } from "./ClientNavLink";

export function NavBar() {
  return (
    <nav className="flex gap-6">
      <ClientNavLink href="#about">About</ClientNavLink>
      <ClientNavLink href="#projects">Projects</ClientNavLink>
    </nav>
  );
}
