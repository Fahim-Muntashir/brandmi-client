/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { DefaultValues, useForm } from "react-hook-form";
import React from "react";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

interface FormProps<T extends ZodType> {
  onSubmit: (data: T["_output"]) => void;
  children: React.ReactNode;
  schema?: T;
  defaultValues?: DefaultValues<T["_output"]>;
  onWatch?: (watch: any) => void;
}

export function UseForm<T extends ZodType>({
  onSubmit,
  children,
  schema,
  defaultValues,
  onWatch,
}: FormProps<T>) {
  const customForm: Record<string, any> = {};
  if (schema) {
    customForm["resolver"] = zodResolver(schema);
  }
  if (defaultValues) {
    customForm["defaultValues"] = defaultValues;
  }
  const form = useForm({
    ...customForm,
  });
  const watch = form.watch;
  if (onWatch) {
    onWatch(watch);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {children}
      </form>
    </Form>
  );
}
