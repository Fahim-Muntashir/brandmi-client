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

type gigstatus = "active" | "pending" | "paused";

interface Gig {
  id: string;
  title: string;
  thumbnail: string;
  status: gigstatus;
  createdAt: Date;
}

const mockgigs: Gig[] = [
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

export default function GigManager({ allgigs }: { allgigs: Gig[] }) {
  const [gigs, setgigs] = useState<Gig[]>(allgigs);
  const [activeTab, setActiveTab] = useState<gigstatus>("active");
  console.log(allgigs);
  // Optimized handler functions using useCallback
  const handleTabChange = useCallback((tab: gigstatus) => {
    setActiveTab(tab);
  }, []);

  const handleEdit = useCallback((gigId: string) => {
    console.log("Editing gig:", gigId);
    // Implement edit logic here
  }, []);

  const handleDelete = useCallback((gigId: string) => {
    setgigs((prev) => prev.filter((gig) => gig.id !== gigId));
  }, []);

  const handleStatusChange = useCallback(
    (gigId: string, newStatus: gigstatus) => {
      setgigs((prev) =>
        prev.map((gig) =>
          gig.id === gigId ? { ...gig, status: newStatus } : gig
        )
      );
    },
    []
  );

  const handlePublicView = useCallback((gigId: string) => {
    console.log("Opening public view for gig:", gigId);
    // Implement public view logic here - could open in new tab, navigate to public URL, etc.
    window.open(`/public/gig/${gigId}`, "_blank");
  }, []);

  // Memoized filtered gigs for performance
  const filteredgigs = useMemo(
    () => gigs.filter((gig) => gig.status === activeTab),
    [gigs, activeTab]
  );

  // Memoized gig counts
  const gigCounts = useMemo(() => {
    return gigs.reduce((acc, gig) => {
      acc[gig.status] = (acc[gig.status] || 0) + 1;
      return acc;
    }, {} as Record<gigstatus, number>);
  }, [gigs]);

  const tabs: { key: gigstatus; label: string; count: number }[] = [
    { key: "active", label: "Active", count: gigCounts.active || 0 },
    { key: "pending", label: "Pending", count: gigCounts.pending || 0 },
    { key: "paused", label: "Paused", count: gigCounts.paused || 0 },
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
        {filteredgigs.length === 0 ? (
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
              No {activeTab} gigs
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              Get started by creating a new gig
            </p>
          </div>
        ) : (
          filteredgigs.map((gig) => (
            <GigItem
              key={gig?._id}
              gig={gig}
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

// Memoized GigItem component for better performance
const GigItem = React.memo(
  ({
    gig,
    onEdit,
    onDelete,
    onStatusChange,
    onPublicView,
  }: {
    gig: Gig;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onStatusChange: (id: string, status: gigstatus) => void;
    onPublicView: (id: string) => void;
  }) => {
    const handleEdit = useCallback(() => onEdit(gig.id), [onEdit, gig.id]);
    const handleDelete = useCallback(
      () => onDelete(gig.id),
      [onDelete, gig.id]
    );
    const handlePublicView = useCallback(
      () => onPublicView(gig.id),
      [onPublicView, gig.id]
    );

    const handlePause = useCallback(() => {
      onStatusChange(gig.id, gig.status === "paused" ? "active" : "paused");
    }, [onStatusChange, gig.id, gig.status]);

    const getStatusColor = (status: gigstatus) => {
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
                src={gig.images[0] || "/placeholder.svg"}
                alt="Gig thumbnail"
                className="w-12 h-9 sm:w-16 sm:h-12 object-cover rounded-md border border-gray-200"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate leading-tight">
                {gig.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <Badge
                  variant="outline"
                  className={`text-xs ${getStatusColor(gig.status)}`}
                >
                  {gig.status.charAt(0).toUpperCase() + gig.status.slice(1)}
                </Badge>
                <span className="text-xs text-gray-500 hidden sm:inline">
                  <p>
                    {gig.createdAt
                      ? new Date(gig.createdAt).toLocaleDateString()
                      : "No date available"}
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-1 sm:gap-2">
            {gig.status === "active" && (
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
                  {gig.status === "paused" ? (
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

GigItem.displayName = "GigItem";
