import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  Link,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
  DropdownItem,
} from "@nextui-org/react";
import { ChatsCircle } from "@phosphor-icons/react";

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link
          color="foreground"
          href="#"
          className="flex items-center gap-2 text-xl"
        >
          <ChatsCircle weight="duotone" />
          <span className="font-bold text-inherit">Comentário</span>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/" aria-current="page" color="primary">
            Frameworks 1
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="https://github.com/murilodestefani/comentario-fw1"
            target="_blank"
          >
            GitHub
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Murilo Destefani"
              size="sm"
              src="./murilo.jpg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Logado como</p>
              <p className="max-w-[25px] font-semibold">
                murilo.destefani@estudante.ifms.edu.br
              </p>
            </DropdownItem>
            <DropdownItem>Meus Comentários</DropdownItem>
            <DropdownItem>Sistema</DropdownItem>
            <DropdownItem>Configurações</DropdownItem>
            <DropdownItem>Ajuda & Feedback</DropdownItem>
            <DropdownItem color="danger">Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
