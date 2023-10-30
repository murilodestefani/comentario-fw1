import { Link } from "@nextui-org/react";
import { FacebookLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [ano, setAno] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setAno(new Date().getFullYear());
    }, 60000);

    return () => {
      clearInterval(interval); // Limpar o intervalo quando o componente é desmontado
    };
  }, []);

  return (
    <footer className="container mx-auto flex flex-col items-center justify-between gap-2 py-8 px-4 md:flex-row md:px-0">
      <div className="social flex flex-row gap-2">
        <Link
          href="https://github.com/murilodestefani/comentario-fw1"
          color="foreground"
          target="_blank"
        >
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

      <span className="text-center text-sm md:text-base">&copy; {ano} Murilo Destefani - Todos os direitos reservados.</span>
    </footer>
  );
}
