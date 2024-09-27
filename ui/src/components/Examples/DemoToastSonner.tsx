import { Button } from "../core";
import { toast } from "sonner";

export const DemoToastSonner = () => {
  return (
    <Button
      variant="secondary"
      className="w-full"
      onClick={() =>
        toast("Toast Sonner", {
          description: "Toast Sonner Description",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo Clicked"),
          },
          duration: 2000,
        })
      }
    >
      Teste Sonner Toaster
    </Button>
  );
};