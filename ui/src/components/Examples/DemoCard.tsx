import { BellRing, Check } from "lucide-react";
import { cn } from "src/lib/utils";
import Button from "../Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Card";
import { Switch } from "../Switch";
import { useState } from "react";
import { useToast } from "src/hooks/use-toast";
import { z } from "zod";
import Form from "../Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AccordionTrigger } from "../Accordion";

const formSchema = z.object({
  pushNotifications: z.boolean().default(false),
});

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  const [valueSwitch, setValueSwitch] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();

  const testTest = (e: any) => {

    console.log("Test test", e);
  }

  const onSwitchCheckChange = (value: any) => {
    setValueSwitch(value);

    console.log("Switch changed", value);
  };

  const handleMarkAllAsRead = (data: z.infer<typeof formSchema>) => {
    console.log("Mark all as read");
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(valueSwitch, null, 2)}
          </code>
        </pre>
      ),
      timeout: 5000,
    });
  };

  return (
    <Form.Form {...form}>
      <form onSubmit={form.handleSubmit(handleMarkAllAsRead)}>
        <Form.FormField
          control={form.control}
          name="pushNotifications"
          render={({ field }) => (
            <div className="space-y-2">
              <Form.FormItem>
                <Card className={cn("w-[380px]", className)} {...props}>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      You have 3 unread messages.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                      <BellRing />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Push Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Send notifications to device.
                        </p>
                      </div>
                      <Form.FormControl>
                        <Switch onCheckedChange={onSwitchCheckChange} />
                      </Form.FormControl>
                    </div>
                    <div>
                      {notifications.map((notification, index) => (
                        <div
                          key={index}
                          className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {notification.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {notification.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Form.FormControl>
                      <Button type="submit" className="w-full" onClick={testTest}>
                        <Check className="mr-2 h-4 w-4" /> Mark all as read
                      </Button>
                    </Form.FormControl>
                  </CardFooter>
                </Card>
              </Form.FormItem>

              <Form.FormItem>
                <Card {...props} className={cn("w-[380px]", className)}>
                  <CardHeader />
                  <CardContent className="gap-2 flex-col justify-center items-center flex">
                    <Form.FormControl>
                      <AccordionTrigger
                        className="flex items-center justify-between"
                        noArrow
                      >
                        <Switch
                          onCheckedChange={(algo: any) => console.log(algo)}
                        />
                      </AccordionTrigger>
                    </Form.FormControl>
                    <Form.FormDescription>
                      This is your public display name.
                    </Form.FormDescription>
                    <Form.FormMessage />
                  </CardContent>
                </Card>
              </Form.FormItem>
            </div>
          )}
        ></Form.FormField>
      </form>
    </Form.Form>
  );
}

export default CardDemo;
