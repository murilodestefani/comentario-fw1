import { Avatar, Link } from "@nextui-org/react";
import { FacebookLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-2 p-8 md:flex-row">
      <div className="dev flex items-center justify-center">
        <span>Desenvolvido por </span>
        <Avatar
          className="ms-4"
          isBordered
          color="default"
          src="./murilo.jpg"
        />
      </div>

      <div className="social flex flex-row gap-2">
        <Link href="https://github.com/" color="foreground" target="_blank">
          <GithubLogo size={32} weight="fill" />
        </Link>
        <Link
          href="https://www.facebook.com/destefanimurilo"
          color="foreground"
          target="_blank"
        >
          <FacebookLogo size={32} weight="fill" />
        </Link>
        <Link
          href="https://www.instagram.com/murilo_destefani/"
          color="foreground"
          target="_blank"
        >
          <InstagramLogo size={32} weight="fill" />
        </Link>
      </div>
    </footer>
  );
}
