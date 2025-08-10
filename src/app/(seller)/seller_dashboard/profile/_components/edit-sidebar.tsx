"use client";

import type React from "react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Pencil, Plus, X } from "lucide-react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useSidebar } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

// --- Form Interfaces ---
interface HeaderFormValues {
  profileImage: string; // Base64 string or URL
  name: string;
  country: string;
  languageName: string;
  languageLevel: "basic" | "conversational" | "fluent" | "native";
}

interface AboutFormValues {
  tagline: string;
  description: string;
}

interface SkillsFormInput {
  newSkill: string; // For the input to add new skills
}

interface PortfolioFormValues {
  title: string;
  description: string;
  imageUrl: string; // Base64 string or URL
}

// --- Component Props ---
interface EditSidebarProps {
  section: "none" | "header" | "about" | "skills" | "portfolio";
  initialHeaderData: HeaderFormValues;
  initialAboutData: AboutFormValues;
  initialSkillsData: string[];
  onSaveHeader: (data: HeaderFormValues) => void;
  onSaveAbout: (data: AboutFormValues) => void;
  onSaveSkills: (data: string[]) => void;
  onAddPortfolioItem: (data: PortfolioFormValues) => void;
  onCancel: () => void;
}

export function EditSidebar({
  section,
  initialHeaderData,
  initialAboutData,
  initialSkillsData,
  onSaveHeader,
  onSaveAbout,
  onSaveSkills,
  onAddPortfolioItem,
  onCancel,
}: EditSidebarProps) {
  const { open, setOpen } = useSidebar();
  const profileImageInputRef = useRef<HTMLInputElement>(null);
  const portfolioImageInputRef = useRef<HTMLInputElement>(null);

  // --- React Hook Form Instances ---
  const {
    register: registerHeader,
    handleSubmit: handleSubmitHeader,
    control: controlHeader,
    reset: resetHeader,
    watch: watchHeader, // To watch profileImage for preview
    setValue: setValueHeader, // To set profileImage value from file input
    formState: { errors: errorsHeader },
  } = useForm<HeaderFormValues>();

  const {
    register: registerAbout,
    handleSubmit: handleSubmitAbout,
    reset: resetAbout,
    formState: { errors: errorsAbout },
  } = useForm<AboutFormValues>();

  const {
    register: registerSkillsInput, // For the new skill input
    handleSubmit: handleSubmitSkillsInput,
    reset: resetSkillsInput,
    formState: { errors: errorsSkillsInput },
  } = useForm<SkillsFormInput>();

  const {
    register: registerPortfolio,
    handleSubmit: handleSubmitPortfolio,
    reset: resetPortfolio,
    watch: watchPortfolio, // To watch imageUrl for preview
    setValue: setValuePortfolio, // To set imageUrl value from file input
    formState: { errors: errorsPortfolio },
  } = useForm<PortfolioFormValues>();

  // --- Local State for dynamic skills list ---
  const [tempSkills, setTempSkills] = useState(initialSkillsData);

  // --- Reset forms and local states when section changes (sidebar opens for a new section) ---
  useEffect(() => {
    if (section === "header") {
      resetHeader(initialHeaderData);
    } else if (section === "about") {
      resetAbout(initialAboutData);
    } else if (section === "skills") {
      setTempSkills(initialSkillsData); // Skills list is managed by useState
      resetSkillsInput({ newSkill: "" }); // Reset new skill input
    } else if (section === "portfolio") {
      resetPortfolio({
        title: "",
        description: "",
        imageUrl: "/placeholder.svg?height=100&width=150",
      });
    }
  }, [
    section,
    initialHeaderData,
    initialAboutData,
    initialSkillsData,
    resetHeader,
    resetAbout,
    resetSkillsInput,
    resetPortfolio,
  ]);

  // --- Image Upload Handlers (now update RHF fields directly) ---
  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValueHeader("profileImage", reader.result as string, {
          shouldValidate: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePortfolioImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValuePortfolio("imageUrl", reader.result as string, {
          shouldValidate: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // --- Skills Management ---
  const handleAddSkill = (data: SkillsFormInput) => {
    if (data.newSkill.trim() && !tempSkills.includes(data.newSkill.trim())) {
      setTempSkills([...tempSkills, data.newSkill.trim()]);
      resetSkillsInput({ newSkill: "" }); // Clear the input after adding
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setTempSkills(tempSkills.filter((skill) => skill !== skillToRemove));
  };

  // --- Save Handlers (wrapped by handleSubmit) ---
  const onSubmitHeader: SubmitHandler<HeaderFormValues> = (data) => {
    onSaveHeader(data);
  };

  const onSubmitAbout: SubmitHandler<AboutFormValues> = (data) => {
    onSaveAbout(data);
  };

  const onSubmitSkills = () => {
    // This is called by a button, not a form submission, so no handleSubmit wrapper needed here
    onSaveSkills(tempSkills); // Pass the current tempSkills array
  };

  const onSubmitPortfolio: SubmitHandler<PortfolioFormValues> = (data) => {
    onAddPortfolioItem(data);
  };

  const handleCancel = () => {
    setOpen(false); // Close the sheet
    onCancel(); // Call parent's cancel logic
  };

  // Determine the title for the sidebar based on the section
  const getSidebarTitle = () => {
    switch (section) {
      case "header":
        return "Edit Profile Info";
      case "about":
        return "Edit About Section";
      case "skills":
        return "Edit Skills";
      case "portfolio":
        return "Add Portfolio Item";
      default:
        return "Edit";
    }
  };

  // Watch current image values for preview
  const currentProfileImage = watchHeader("profileImage");
  const currentPortfolioImage = watchPortfolio("imageUrl");

  return (
    <Sheet open={open && section !== "none"} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center justify-between">
            {getSidebarTitle()}
            <Button variant="ghost" size="icon" onClick={handleCancel}>
              <X className="w-5 h-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Edit the details for your {section} section.
          </SheetDescription>
        </SheetHeader>
        {/* Main content area for forms */}
        <div className="flex-1 overflow-y-auto p-4">
          {section === "header" && (
            <form
              onSubmit={handleSubmitHeader(onSubmitHeader)}
              className="grid gap-6"
            >
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-24 h-24 border-2 border-gray-200">
                  <AvatarImage
                    src={currentProfileImage || "/placeholder.svg"}
                    alt="Profile Image"
                  />
                  <AvatarFallback>FM</AvatarFallback>
                </Avatar>
                <input
                  type="file"
                  ref={profileImageInputRef}
                  className="hidden"
                  onChange={handleProfileImageChange}
                  accept="image/*"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => profileImageInputRef.current?.click()}
                >
                  <Pencil className="w-4 h-4 mr-2" />
                  Change Profile Image
                </Button>
                {errorsHeader.profileImage && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsHeader.profileImage.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  {...registerHeader("name", { required: "Name is required" })}
                />
                {errorsHeader.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsHeader.name.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  {...registerHeader("country", {
                    required: "Country is required",
                  })}
                />
                {errorsHeader.country && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsHeader.country.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="language-name">Language</Label>
                <Input
                  id="language-name"
                  placeholder="Language Name"
                  {...registerHeader("languageName", {
                    required: "Language is required",
                  })}
                />
                {errorsHeader.languageName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsHeader.languageName.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="language-level">Proficiency Level</Label>
                <Controller
                  name="languageLevel"
                  control={controlHeader}
                  rules={{ required: "Proficiency level is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="language-level" className="w-full">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="conversational">
                          Conversational
                        </SelectItem>
                        <SelectItem value="fluent">Fluent</SelectItem>
                        <SelectItem value="native">Native</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errorsHeader.languageLevel && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsHeader.languageLevel.message}
                  </p>
                )}
              </div>
              {/* Buttons for Header form */}
              <div className="flex justify-end gap-2 mt-auto pt-4 border-t">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          )}

          {section === "about" && (
            <form
              onSubmit={handleSubmitAbout(onSubmitAbout)}
              className="grid gap-6"
            >
              <div className="grid gap-2">
                <Label htmlFor="about-tagline">Tagline</Label>
                <Input
                  id="about-tagline"
                  {...registerAbout("tagline", {
                    required: "Tagline is required",
                  })}
                />
                {errorsAbout.tagline && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsAbout.tagline.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="about-description">Description</Label>
                <Textarea
                  id="about-description"
                  {...registerAbout("description", {
                    required: "Description is required",
                  })}
                  className="min-h-[120px]"
                />
                {errorsAbout.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsAbout.description.message}
                  </p>
                )}
              </div>
              {/* Buttons for About form */}
              <div className="flex justify-end gap-2 mt-auto pt-4 border-t">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          )}

          {section === "skills" && (
            <div className="grid gap-6">
              <div className="flex flex-wrap gap-2 mb-2">
                {tempSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm flex items-center gap-1"
                  >
                    {skill}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-4 p-0 ml-1"
                      onClick={() => handleRemoveSkill(skill)}
                    >
                      <X className="w-3 h-3" />
                      <span className="sr-only">Remove skill</span>
                    </Button>
                  </Badge>
                ))}
              </div>
              <form
                onSubmit={handleSubmitSkillsInput(handleAddSkill)}
                className="flex gap-2"
              >
                <Input
                  placeholder="Add new skill"
                  {...registerSkillsInput("newSkill", {
                    required: "Skill cannot be empty",
                  })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // Prevent form submission on Enter
                      handleSubmitSkillsInput(handleAddSkill)();
                    }
                  }}
                />
                <Button type="submit">
                  <Plus className="w-4 h-4" />
                  <span className="sr-only">Add skill</span>
                </Button>
              </form>
              {errorsSkillsInput.newSkill && (
                <p className="text-red-500 text-xs mt-1">
                  {errorsSkillsInput.newSkill.message}
                </p>
              )}
              {/* Buttons for Skills section */}
              <div className="flex justify-end gap-2 mt-auto pt-4 border-t">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="button" onClick={onSubmitSkills}>
                  Save
                </Button>
              </div>
            </div>
          )}

          {section === "portfolio" && (
            <form
              onSubmit={handleSubmitPortfolio(onSubmitPortfolio)}
              className="grid gap-6"
            >
              <div className="grid gap-2">
                <Label htmlFor="portfolio-title">Title</Label>
                <Input
                  id="portfolio-title"
                  {...registerPortfolio("title", {
                    required: "Title is required",
                  })}
                />
                {errorsPortfolio.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsPortfolio.title.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="portfolio-description">Description</Label>
                <Textarea
                  id="portfolio-description"
                  {...registerPortfolio("description", {
                    required: "Description is required",
                  })}
                  className="min-h-[100px]"
                />
                {errorsPortfolio.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsPortfolio.description.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="portfolio-image">Image</Label>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={currentPortfolioImage || "/placeholder.svg"}
                    alt="Portfolio Item Preview"
                    width={200}
                    height={120}
                    className="rounded-md border object-cover"
                  />
                  <input
                    type="file"
                    ref={portfolioImageInputRef}
                    className="hidden"
                    onChange={handlePortfolioImageChange}
                    accept="image/*"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => portfolioImageInputRef.current?.click()}
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
                {errorsPortfolio.imageUrl && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsPortfolio.imageUrl.message}
                  </p>
                )}
              </div>
              {/* Buttons for Portfolio form */}
              <div className="flex justify-end gap-2 mt-auto pt-4 border-t">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
