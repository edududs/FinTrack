"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "../../../src/hooks/use-toast";
import Button from "../Button";
import Form from "../Forms";
import { Switch } from "../Switch";

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

export const DemoFormSwitches: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
    },
  });
  const { toast } = useToast();

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
        ),
      timeout: 5000,
    });
  }

  return (
    <Form.Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <Form.FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <Form.FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Form.FormLabel className="text-base">
                      Marketing emails
                    </Form.FormLabel>
                    <Form.FormDescription>
                      Receive emails about new products, features, and more.
                    </Form.FormDescription>
                  </div>
                  <Form.FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </Form.FormControl>
                </Form.FormItem>
              )}
            />
            <Form.FormField
              control={form.control}
              name="security_emails"
              render={({ field }) => (
                <Form.FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Form.FormLabel className="text-base">
                      Security emails
                    </Form.FormLabel>
                    <Form.FormDescription>
                      Receive emails about your account security.
                    </Form.FormDescription>
                  </div>
                  <Form.FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </Form.FormControl>
                </Form.FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form.Form>
  );
}
