import Button from "../core/Button";
import { useToast } from "../../../src/hooks/use-toast";
import { ToastAction } from "../core/Toast/Toast";

const ButtonDemoToast: React.FC = () => {
  const { toast } = useToast();
  return (
    <Button
      variant="secondary"
      className="w-full"
      onClick={() =>
        toast({
          title: "Toast Title",
          description: "Toast Description",
          action: (
            <ToastAction
              altText="Desfazer"
              onClick={() => console.log("Undo Clicked")}
            >
              Desfazer
            </ToastAction>
          ),
          duration: 1000,
        })
      }
    >
      Teste Toaster
    </Button>
  );
};

export default ButtonDemoToast;
