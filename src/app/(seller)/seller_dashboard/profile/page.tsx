"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSidebar } from "@/components/ui/sidebar";
import { EditSidebar } from "./_components/edit-sidebar";
import { useGetSellerProfileQuery } from "@/redux/api/sellerProfileApi";
import { useAuth } from "@/providers/AuthProvider";

export default function SellerProfileEdit() {
  const { setOpen } = useSidebar();
  const { user } = useAuth();
  const { data, error, isLoading } = useGetSellerProfileQuery({
    userId: user?.userId,
  });

  console.log(data);

  // Profile Header State
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=96&width=96"
  );
  const [name, setName] = useState("Fahim Muntashir");
  const [country, setCountry] = useState("Bangladesh");
  const [languageName, setLanguageName] = useState("English");
  const [languageLevel, setLanguageLevel] = useState<
    "basic" | "conversational" | "fluent" | "native"
  >("fluent");

  // About Section State
  const [aboutTagline, setAboutTagline] = useState(
    "Honesty is the best pholocy"
  );
  const [aboutDescription, setAboutDescription] = useState(
    "There are many variations of passages of Lorem Ipsumnet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  );

  // Skills Section State
  const [skills, setSkills] = useState([
    "Web developer",
    "Front-end web developer",
    "Full stack web developer",
    "React expert",
    "Next.js developer",
    "Business startup expert",
  ]);

  // Portfolio Section State
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: "1",
      title: "Project Alpha",
      description: "Description for project alpha.",
      imageUrl: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "2",
      title: "Project Beta",
      description: "Description for project beta.",
      imageUrl: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "3",
      title: "Project Gamma",
      description: "Description for project gamma.",
      imageUrl: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "4",
      title: "Project Delta",
      description: "Description for project delta.",
      imageUrl: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "5",
      title: "Project Epsilon",
      description: "Description for project epsilon.",
      imageUrl: "/placeholder.svg?height=100&width=150",
    },
  ]);

  // State to control which section is being edited in the sidebar
  const [editingSection, setEditingSection] = useState<
    "none" | "header" | "about" | "skills" | "portfolio"
  >("none");

  const simulateApiCall = async (data: any) => {
    console.log("Simulating API call with data:", data);
    return new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  };

  const handleSaveHeader = async (data: {
    profileImage: string;
    name: string;
    country: string;
    languageName: string;
    languageLevel: "basic" | "conversational" | "fluent" | "native";
  }) => {
    await simulateApiCall(data);
    setProfileImage(data.profileImage);
    setName(data.name);
    setCountry(data.country);
    setLanguageName(data.languageName);
    setLanguageLevel(data.languageLevel);
    setOpen(false);
    setEditingSection("none");
  };

  const handleSaveAbout = async (data: {
    tagline: string;
    description: string;
  }) => {
    await simulateApiCall(data);
    setAboutTagline(data.tagline);
    setAboutDescription(data.description);
    setOpen(false);
    setEditingSection("none");
  };

  const handleSaveSkills = async (data: string[]) => {
    await simulateApiCall(data);
    setSkills(data);
    setOpen(false);
    setEditingSection("none");
  };

  const handleAddPortfolioItem = async (data: {
    title: string;
    description: string;
    imageUrl: string;
  }) => {
    await simulateApiCall(data);
    const newItem = { ...data, id: String(portfolioItems.length + 1) }; // Simple ID generation
    setPortfolioItems([...portfolioItems, newItem]);
    setOpen(false);
    setEditingSection("none");
  };

  const handleCancelEdit = () => {
    setOpen(false);
    setEditingSection("none");
  };

  const openEditSidebar = (
    section: "header" | "about" | "skills" | "portfolio"
  ) => {
    setEditingSection(section);
    setOpen(true);
  };
  if (isLoading) return <p>Loading seller profile...</p>;
  if (error) return <p>Error loading profile.</p>;
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 container">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 ">
        {/* Main Content Column */}
        <div className="space-y-6">
          {/* Profile Header */}
          <Card className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative">
              <Avatar className="w-24 h-24 border-2 border-gray-200">
                <AvatarImage
                  src={profileImage || "/placeholder.svg"}
                  alt="Profile Image"
                />
                <AvatarFallback>FM</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-white shadow-sm"
                onClick={() => openEditSidebar("header")}
              >
                <Pencil className="w-4 h-4" />
                <span className="sr-only">Edit profile picture</span>
              </Button>
            </div>
            <div className="grid gap-1 flex-grow">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6"
                  onClick={() => openEditSidebar("header")}
                >
                  <Pencil className="w-4 h-4 text-gray-500" />
                  <span className="sr-only">Edit name</span>
                </Button>
              </div>
              <div className="text-gray-600 text-sm">{country}</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                Speaks {languageName} ({languageLevel})
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6"
                  onClick={() => openEditSidebar("header")}
                >
                  <Pencil className="w-4 h-4 text-gray-500" />
                  <span className="sr-only">Edit languages</span>
                </Button>
              </div>
            </div>
          </Card>

          {/* About Section */}
          <Card className="p-6">
            <CardHeader className="p-0 pb-4">
              <h2 className="text-xl font-semibold">About</h2>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <p className="font-medium text-gray-800">{aboutTagline}</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {aboutDescription}
              </p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => openEditSidebar("about")}
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit about
              </Button>
            </CardContent>
          </Card>

          {/* Portfolio Section */}
          <Card className="p-6">
            <CardHeader className="p-0 pb-4">
              <h2 className="text-xl font-semibold">Portfolio</h2>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div className="flex overflow-x-auto gap-4 pb-2">
                {portfolioItems.map((item) => (
                  <Image
                    key={item.id}
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    width={150}
                    height={100}
                    className="rounded-md border object-cover flex-shrink-0"
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => openEditSidebar("portfolio")}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Portfolio Item
                </Button>
                <Button variant="outline">View All Portfolio</Button>
              </div>
            </CardContent>
          </Card>

          {/* Skills and Expertise Section */}
          <Card className="p-6">
            <CardHeader className="p-0 pb-4">
              <h2 className="text-xl font-semibold">Skills and expertise</h2>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
                {skills.length > 5 && (
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    +{skills.length - 5}
                  </Badge>
                )}
              </div>
              <Button
                variant="outline"
                onClick={() => openEditSidebar("skills")}
              >
                <Plus className="w-4 h-4 mr-2" />
                Edit skills and expertise
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Manage Your Service Card */}
          <Card className="p-6 text-center">
            <CardHeader className="p-0 pb-4">
              <h2 className="text-xl font-semibold">Manage Your Service</h2>
            </CardHeader>
            <CardContent className="p-0">
              <a href="#" className="text-blue-600 hover:underline text-sm">
                go to service page
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Edit Sidebar Component */}
      <EditSidebar
        section={editingSection}
        initialHeaderData={{
          profileImage,
          name,
          country,
          languageName,
          languageLevel,
        }}
        initialAboutData={{
          tagline: aboutTagline,
          description: aboutDescription,
        }}
        initialSkillsData={skills}
        onSaveHeader={handleSaveHeader}
        onSaveAbout={handleSaveAbout}
        onSaveSkills={handleSaveSkills}
        onAddPortfolioItem={handleAddPortfolioItem}
        onCancel={handleCancelEdit}
      />
    </div>
  );
}
