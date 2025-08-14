"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import ProjectManager from "./_components/_manage-gig";
import { useGetSellerGigsQuery } from "@/redux/api/gigApi";
import { useAuth } from "@/providers/AuthProvider";

const page = () => {
  const { user } = useAuth();
  const {
    data: gigs,
    isLoading,
    isError,
  } = useGetSellerGigsQuery(user?.userId);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="container">
      <header className="flex justify-between mt-10">
        <div>
          <h2 className="text-2xl border-l-4 ps-3 font-sans font-semibold">
            Manage your Service
          </h2>
          <p className=" border-l-4 ps-3 my-2 *:font-sans">
            Manage your design projects and track their progress
          </p>
        </div>
        <Button>
          <Link href={"services/publishgig"}>Add New Gig</Link>
        </Button>
      </header>

      <ProjectManager allgigs={gigs}></ProjectManager>
    </div>
  );
};

export default page;
