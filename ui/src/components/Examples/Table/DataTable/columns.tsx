"use client";

import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";

// Definindo o esquema Zod para o tipo Payment
const PaymentSchema = z.object({
  id: z.string(),
  amount: z.number(),
  status: z.enum(["pending", "processing", "success", "failed"]),
  email: z.string().email(),
});

// Usando o tipo inferido do esquema Zod
export type Payment = z.infer<typeof PaymentSchema>;

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
