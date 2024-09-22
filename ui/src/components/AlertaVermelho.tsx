import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "./Alert";

export interface AlertDestructiveProps {
  title?: string;
  description?: string;
}

const AlertDestructive: React.FC<AlertDestructiveProps> = ({
  title,
  description,
}) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  );
};

export default AlertDestructive;
