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

const Form = () => {
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
                id="nome"
                autoComplete="off"
                placeholder="Tyler Cutebiker"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="descricao">Descrição:</FieldLabel>
              <Textarea
                className="min-h-20 w-full break-words"
                id="descricao"
                placeholder=" Tyler parece ser bondoso e gentil. Entusiasta local da cidade, é visto como um pouco distraído,age de forma extravagante e também é conhecido por ser muito indeciso. "
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="serie">Série:</FieldLabel>
              <Input
                id="serie"
                autoComplete="off"
                placeholder="Gravity Falls"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="criador">Criador(es):</FieldLabel>
              <Input
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
        <Button>Cadastrar</Button>
      </div>
    </div>
  );
};

export default Form;
