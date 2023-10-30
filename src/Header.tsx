import { ChatsCircle } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-2 py-8 md:flex-row">
      <ChatsCircle size={80} weight="fill" color="#7dd3fc" />
      <h1 className="text-center text-4xl font-bold">
        Formulário de Comentários
      </h1>
    </header>
  );
}
