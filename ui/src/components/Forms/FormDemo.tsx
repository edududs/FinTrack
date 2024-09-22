"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "../Button";
import Form from ".";
import { Input } from "../Input";
import { useToast } from "../../hooks/use-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const ProfileForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "test valor padrao",
    },
  });
  const { toast } = useToast();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      timeout: 5000,
    });
  };

  return (
    <Form.Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Form.FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Username</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="shadcn" {...field} />
              </Form.FormControl>
              <Form.FormDescription>
                This is your public display name.
              </Form.FormDescription>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form.Form>
  );
};
