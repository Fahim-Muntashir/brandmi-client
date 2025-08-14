"use client";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs = () => {
  const { control } = useFormContext();
  const [newFAQ, setNewFAQ] = useState<FAQ>({ question: "", answer: "" });

  return (
    <FormField
      name="faqs"
      control={control}
      render={({ field }) => {
        const values: FAQ[] = field.value || [];
        const setValues = (newValues: FAQ[]) => field.onChange(newValues);

        const addFAQ = () => {
          if (
            !newFAQ.question.trim() ||
            !newFAQ.answer.trim() ||
            values.some(
              (faq) =>
                faq.question.trim() === newFAQ.question.trim() &&
                faq.answer.trim() === newFAQ.answer.trim()
            )
          ) {
            return;
          }
          setValues([...values, newFAQ]);
          setNewFAQ({ question: "", answer: "" });
        };

        const updateFAQ = (index: number, updatedFAQ: FAQ) => {
          const updatedValues = [...values];
          updatedValues[index] = updatedFAQ;
          setValues(updatedValues);
        };

        const deleteFAQ = (index: number) => {
          const updatedValues = values.filter((_, i) => i !== index);
          setValues(updatedValues);
        };

        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">FAQs</h3>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={addFAQ}
                className="rounded-xl text-gray-600 hover:bg-gray-50"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>

            {/* New FAQ Input */}
            <div className="space-y-3 p-3 bg-gray-50 rounded-xl">
              <Input
                placeholder="Enter question"
                value={newFAQ.question}
                onChange={(e) =>
                  setNewFAQ({ ...newFAQ, question: e.target.value })
                }
                className="rounded-xl border-gray-200 text-sm"
              />
              <Textarea
                placeholder="Enter answer"
                value={newFAQ.answer}
                onChange={(e) =>
                  setNewFAQ({ ...newFAQ, answer: e.target.value })
                }
                className="rounded-xl border-gray-200 text-sm resize-none"
                rows={2}
              />
            </div>

            {/* List of FAQs */}
            <div className="space-y-3">
              {values.map((faq, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-50 rounded-xl space-y-2"
                >
                  <div className="flex items-start gap-2">
                    <div className="flex-1 space-y-2">
                      <Input
                        placeholder="Question"
                        value={faq.question}
                        onChange={(e) =>
                          updateFAQ(index, {
                            ...faq,
                            question: e.target.value,
                          })
                        }
                        className="rounded-lg border-gray-200 text-sm"
                      />
                      <Textarea
                        placeholder="Answer"
                        value={faq.answer}
                        onChange={(e) =>
                          updateFAQ(index, {
                            ...faq,
                            answer: e.target.value,
                          })
                        }
                        className="rounded-lg border-gray-200 text-sm resize-none"
                        rows={2}
                      />
                    </div>
                    <Button
                      size="sm"
                      type="button"
                      variant="ghost"
                      className="h-6 w-6 p-0 hover:bg-red-50 hover:text-red-600 rounded-lg"
                      onClick={() => deleteFAQ(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
};

export default FAQs;
