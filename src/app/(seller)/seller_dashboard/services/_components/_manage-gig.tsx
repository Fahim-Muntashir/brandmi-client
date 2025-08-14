"use client";

import React from "react";

import { useState, useCallback, useMemo } from "react";
import {
  MoreHorizontal,
  Edit3,
  Trash2,
  Pause,
  Play,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

type ProjectStatus = "active" | "pending" | "paused";

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  status: ProjectStatus;
  createdAt: Date;
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Create Your Modern Thumbnail using Our Photoshop Team",
    thumbnail: "/placeholder.svg?height=60&width=80",
    status: "active",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Create Your Modern Thumbnail using Our Photoshop Team",
    thumbnail: "/placeholder.svg?height=60&width=80",
    status: "active",
    createdAt: new Date("2024-01-14"),
  },
  {
    id: "3",
    title: "Create Your Modern Thumbnail using Our Photoshop Team",
    thumbnail: "/placeholder.svg?height=60&width=80",
    status: "pending",
    createdAt: new Date("2024-01-13"),
  },
  {
    id: "4",
    title: "Create Your Modern Thumbnail using Our Photoshop Team",
    thumbnail: "/placeholder.svg?height=60&width=80",
    status: "paused",
    createdAt: new Date("2024-01-12"),
  },
  {
    id: "5",
    title: "Create Your Modern Thumbnail using Our Photoshop Team",
    thumbnail: "/placeholder.svg?height=60&width=80",
    status: "active",
    createdAt: new Date("2024-01-11"),
  },
];

export default function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [activeTab, setActiveTab] = useState<ProjectStatus>("active");

  // Optimized handler functions using useCallback
  const handleTabChange = useCallback((tab: ProjectStatus) => {
    setActiveTab(tab);
  }, []);

  const handleEdit = useCallback((projectId: string) => {
    console.log("Editing project:", projectId);
    // Implement edit logic here
  }, []);

  const handleDelete = useCallback((projectId: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== projectId));
  }, []);

  const handleStatusChange = useCallback(
    (projectId: string, newStatus: ProjectStatus) => {
      setProjects((prev) =>
        prev.map((project) =>
          project.id === projectId ? { ...project, status: newStatus } : project
        )
      );
    },
    []
  );

  const handlePublicView = useCallback((projectId: string) => {
    console.log("Opening public view for project:", projectId);
    // Implement public view logic here - could open in new tab, navigate to public URL, etc.
    window.open(`/public/project/${projectId}`, "_blank");
  }, []);

  // Memoized filtered projects for performance
  const filteredProjects = useMemo(
    () => projects.filter((project) => project.status === activeTab),
    [projects, activeTab]
  );

  // Memoized project counts
  const projectCounts = useMemo(() => {
    return projects.reduce((acc, project) => {
      acc[project.status] = (acc[project.status] || 0) + 1;
      return acc;
    }, {} as Record<ProjectStatus, number>);
  }, [projects]);

  const tabs: { key: ProjectStatus; label: string; count: number }[] = [
    { key: "active", label: "Active", count: projectCounts.active || 0 },
    { key: "pending", label: "Pending", count: projectCounts.pending || 0 },
    { key: "paused", label: "Paused", count: projectCounts.paused || 0 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-4 sm:mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`
                  py-2 sm:py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200
                  ${
                    activeTab === tab.key
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                {tab.label}
                {tab.count > 0 && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {tab.count}
                  </Badge>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <div className="text-gray-400 mb-2">
              <svg
                className="mx-auto h-10 w-10 sm:h-12 sm:w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">
              No {activeTab} projects
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              Get started by creating a new project
            </p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
              onPublicView={handlePublicView}
            />
          ))
        )}
      </div>
    </div>
  );
}

// Memoized ProjectItem component for better performance
const ProjectItem = React.memo(
  ({
    project,
    onEdit,
    onDelete,
    onStatusChange,
    onPublicView,
  }: {
    project: Project;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onStatusChange: (id: string, status: ProjectStatus) => void;
    onPublicView: (id: string) => void;
  }) => {
    const handleEdit = useCallback(
      () => onEdit(project.id),
      [onEdit, project.id]
    );
    const handleDelete = useCallback(
      () => onDelete(project.id),
      [onDelete, project.id]
    );
    const handlePublicView = useCallback(
      () => onPublicView(project.id),
      [onPublicView, project.id]
    );

    const handlePause = useCallback(() => {
      onStatusChange(
        project.id,
        project.status === "paused" ? "active" : "paused"
      );
    }, [onStatusChange, project.id, project.status]);

    const getStatusColor = (status: ProjectStatus) => {
      switch (status) {
        case "active":
          return "bg-green-100 text-green-800";
        case "pending":
          return "bg-yellow-100 text-yellow-800";
        case "paused":
          return "bg-gray-100 text-gray-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt="Project thumbnail"
                className="w-12 h-9 sm:w-16 sm:h-12 object-cover rounded-md border border-gray-200"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate leading-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <Badge
                  variant="outline"
                  className={`text-xs ${getStatusColor(project.status)}`}
                >
                  {project.status.charAt(0).toUpperCase() +
                    project.status.slice(1)}
                </Badge>
                <span className="text-xs text-gray-500 hidden sm:inline">
                  {project.createdAt.toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-1 sm:gap-2">
            {project.status === "active" && (
              <Button
                variant="outline"
                size="sm"
                onClick={handlePublicView}
                className="h-7 sm:h-8 px-2 sm:px-3 text-xs font-medium text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200 bg-transparent"
              >
                <ExternalLink className="mr-1 sm:mr-1.5 h-3 w-3" />
                <span className="hidden sm:inline">Public View</span>
                <span className="sm:hidden">View</span>
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                >
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36 sm:w-40">
                <DropdownMenuItem
                  onClick={handleEdit}
                  className="cursor-pointer"
                >
                  <Edit3 className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handlePause}
                  className="cursor-pointer"
                >
                  {project.status === "paused" ? (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Resume
                    </>
                  ) : (
                    <>
                      <Pause className="mr-2 h-4 w-4" />
                      Pause
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleDelete}
                  className="cursor-pointer text-red-600 focus:text-red-600"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    );
  }
);

ProjectItem.displayName = "ProjectItem";
