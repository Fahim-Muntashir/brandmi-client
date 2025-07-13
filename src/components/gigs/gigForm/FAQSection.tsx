import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming Textarea exists
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
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold">FAQs</label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addFAQ}
              >
                <Plus className="h-4 w-4 mr-2" /> Add FAQ
              </Button>
            </div>

            {/* New FAQ Input */}
            <div className="flex flex-col gap-4 items-start mt-4">
              <Input
                placeholder="Enter a question"
                value={newFAQ.question}
                onChange={(e) =>
                  setNewFAQ({ ...newFAQ, question: e.target.value })
                }
              />
              <Textarea
                placeholder="Enter an answer"
                value={newFAQ.answer}
                onChange={(e) =>
                  setNewFAQ({ ...newFAQ, answer: e.target.value })
                }
              />
            </div>

            {/* List of FAQs */}
            <div className="space-y-5 mt-5">
              {values.map((faq, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-1 space-y-3">
                    <Input
                      placeholder="Question"
                      value={faq.question}
                      onChange={(e) =>
                        updateFAQ(index, {
                          ...faq,
                          question: e.target.value,
                        })
                      }
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
                    />
                  </div>
                  <Button
                    size="sm"
                    type="button"
                    variant="destructive"
                    className="h-5 w-4"
                    onClick={() => deleteFAQ(index)}
                  >
                    <X />
                  </Button>
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
