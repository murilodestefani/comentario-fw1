import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import { ChatCircle, PaperPlaneRight } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export default function App() {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState({
    autor: "",
    texto: "",
  });

  const adicionarComentario = () => {
    if (!novoComentario.autor || !novoComentario.texto) {
      return;
    }

    if (novoComentario.autor && novoComentario.texto) {
      const novoComentarioLista = [
        { ...novoComentario, data: new Date().toLocaleString() },
        ...comentarios,
      ];
      setComentarios(novoComentarioLista);
      setNovoComentario({ autor: "", texto: "" });

      localStorage.setItem("register", JSON.stringify(comentarios));
    }
  };

  useEffect(() => {
    const comentariosSalvos = localStorage.getItem("register");

    if (comentariosSalvos) {
      setComentarios(JSON.parse(comentariosSalvos));
    }
  }, []);

  return (
    <section className="mx-4 flex flex-col justify-center gap-8">
      <Input
        type="text"
        label="Autor"
        placeholder="Digite seu nome"
        isRequired
        value={novoComentario.autor}
        onChange={(e) =>
          setNovoComentario({ ...novoComentario, autor: e.target.value })
        }
      />

      <Textarea
        label="Comentario"
        labelPlacement="outside"
        placeholder="Digite seu comentário aqui"
        isRequired
        value={novoComentario.texto}
        onChange={(e) =>
          setNovoComentario({ ...novoComentario, texto: e.target.value })
        }
      />

      <Tooltip content="Clique para publicar seu comentário">
        <Button
          color="primary"
          endContent={<PaperPlaneRight weight="fill" />}
          onClick={adicionarComentario}
        >
          Publicar
        </Button>
      </Tooltip>

      <Chip
        startContent={<ChatCircle size={18} />}
        variant="faded"
        color="success"
      >
        {comentarios.length} Comentários
      </Chip>

      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>
            <Card className="max-w-[340px]">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src="https://source.unsplash.com/random/"
                  />
                  <div className="flex flex-col items-start justify-center gap-1">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      {comentario.autor}
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400">
                      comentou:
                    </h5>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p>{comentario.texto}</p>
              </CardBody>
              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className=" text-small text-default-400">
                    {comentario.data}
                  </p>
                </div>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
