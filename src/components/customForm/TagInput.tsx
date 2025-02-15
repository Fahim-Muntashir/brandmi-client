import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TagInputProps {
  name: string;
  label: string;
  placeholder?: string;
  labelCenter?: boolean;
}

export const TagInput = ({
  name,
  label,
  placeholder,
  labelCenter,
}: TagInputProps) => {
  const { control } = useFormContext();
  const [tag, setTag] = useState("");

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const tags = field.value || []; // Current value of the tags array
        const setTags = (newTags: string[]) => field.onChange(newTags); // Update tags value

        const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter" && tag.trim()) {
            e.preventDefault();
            if (!tags.includes(tag.trim())) {
              setTags([...tags, tag.trim()]);
            }
            setTag(""); // Reset input
          }
        };

        const handleRemoveTag = (tagToRemove: string) => {
          const newTags = tags.filter((t: string) => t !== tagToRemove);
          setTags(newTags);
        };

        return (
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
              <div>
                <Input
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  onKeyDown={handleAddTag}
                  placeholder={placeholder || "Press enter to add tags"}
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((t: string) => (
                    <Badge key={t} variant="secondary" className="px-3 py-1">
                      {t}
                      <X
                        className="ml-2 h-3 w-3 cursor-pointer"
                        onClick={() => handleRemoveTag(t)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
