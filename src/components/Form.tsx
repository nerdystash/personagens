import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Form = () => {
  const [character, setCharacter] = useState({});

  const saveCharacter = async () => {
    const response = await fetch("/api/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });

    if (response.ok) {
      window.location.href = "/personagens";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 ">
        <FieldSet>
          <FieldTitle className="text-3xl font-semibold">
            Cadastre seu Personagem
          </FieldTitle>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="nome">Nome do personagem:</FieldLabel>
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setCharacter({ ...character, name: value });
                }}
                id="nome"
                autoComplete="off"
                placeholder="Tyler Cutebiker"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="descricao">Descrição:</FieldLabel>
              <Textarea
                onChange={(e) => {
                  const value = e.target.value;
                  setCharacter({ ...character, description: value });
                }}
                className="min-h-20 w-full break-words"
                id="descricao"
                placeholder=" Tyler parece ser bondoso e gentil. Entusiasta local da cidade, é visto como um pouco distraído,age de forma extravagante e também é conhecido por ser muito indeciso. "
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="serie">Série:</FieldLabel>
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setCharacter({ ...character, show: value });
                }}
                id="serie"
                autoComplete="off"
                placeholder="Gravity Falls"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="criador">Criador(es):</FieldLabel>
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setCharacter({ ...character, creators: value });
                }}
                id="criador"
                autoComplete="off"
                placeholder="Alex Hirsch"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancelar</Button>
        <Button onClick={() => saveCharacter()}>Cadastrar</Button>
      </div>
    </div>
  );
};

export default Form;
