import { useEffect } from "react";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

type SuccessMessageProps = {
  message: string;
};

const SuccessMessage = ({ message }: SuccessMessageProps) => {
  useEffect(() => {
    toast("Sucesso!", {
      description: message,
    });
  }, []);

  return (
    <>
      <Toaster />
    </>
  );
};

export default SuccessMessage;
