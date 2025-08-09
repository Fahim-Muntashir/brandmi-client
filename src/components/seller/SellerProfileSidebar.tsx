import React from "react";
import { Star, Clock, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
const SellerProfileSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <Image
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/b50707693a12bb102034ac34be864c16-1740066506883/74ec8681-1189-4e04-9cf1-f4d8ced6b0de.jpg"
            alt="Profile picture"
            width={150}
            height={150}
            className="rounded-full"
          />
          <Badge className="absolute -bottom-2 right-0 bg-purple-600">
            L EVEL TWO
          </Badge>
        </div>
        <h1 className="mt-4 text-2xl font-bold">M. Abuzar Asif</h1>
        <p className="text-muted-foreground">@abuxarstudios</p>
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
          <span className="ml-1 text-sm">4.8 (68 reviews)</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button className="flex-1 bg-primary hover:bg-emerald-600">
          Contact Me
        </Button>
        <Button variant="outline" className="flex-1">
          Get a Quote
        </Button>
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="flex-1 bg-slate-200 w-full  font-bold"
              variant="outline"
            >
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[565px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Description
                </Label>
                <Input id="username" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Profile Headline
                </Label>
                <Input id="username" className="col-span-3" />
              </div>

              {/* country  */}

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                  Country
                </Label>
                <div className="col-span-3">
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="af">Afghanistan</SelectItem>
                      <SelectItem value="gy">Guyana</SelectItem>
                      <SelectItem value="ht">Haiti</SelectItem>
                      <SelectItem value="hn">Honduras</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="space-y-4 rounded-lg border p-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">From</span>
          <span className="ml-auto font-medium">Pakistan</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Member since</span>
          <span className="ml-auto font-medium">Sep 2020</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Avg. Response Time</span>
          <span className="ml-auto font-medium">5 hours</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Last Delivery</span>
          <span className="ml-auto font-medium">22 days</span>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border p-4">
        <h2 className="font-semibold">Description</h2>
        <p className="text-sm text-muted-foreground">
          Hi, My name is abuzar, I have 3+ years of experience in graphic design
          and in 3d art. I also run an IT institute in Pakistan
        </p>
      </div>

      <div className="space-y-4 rounded-lg border p-4">
        <h2 className="font-semibold">Languages</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">English</span>
            <span className="text-sm text-muted-foreground">
              Conversational
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Urdu (اردو)</span>
            <span className="text-sm text-muted-foreground">Fluent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfileSidebar;
