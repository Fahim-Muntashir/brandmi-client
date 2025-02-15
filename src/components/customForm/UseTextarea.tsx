"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";

interface InputProps {
  name: string;
  placeholder?: string;
  label: string;
  type?: string;
  labelCenter?: boolean;
  row?: number;
}

const UseTextarea = ({
  name,
  placeholder,
  label,
  labelCenter,
  row = 2,
}: InputProps) => {
  const formContext = useFormContext();
  return (
    <FormField
      control={formContext.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel
            className={cn(
              "font-semibold text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              labelCenter && "flex justify-center"
            )}
          >
            {label}
          </FormLabel>
          <FormControl>
            <Textarea
              rows={row}
              placeholder={placeholder}
              value={field.value ?? ""} // Use nullish coalescing
              onChange={(e) => field.onChange(e.target.value)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default UseTextarea;
