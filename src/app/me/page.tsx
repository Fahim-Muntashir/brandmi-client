/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance, { ErrorResponse, ResponseOptions } from "@/axios/axios";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import { Card } from "@/components/ui/card";
import { cookies } from "next/headers";

const Profile: React.FC = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;
  const refreshToken = cookieStore.get("refreshToken")?.value || null;
  let data;
  try {
    const res = await axiosInstance.get("/user/me", {
      headers: {
        // Forward cookies manually
        Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}`,
      },
    });
    const result = res.data as ResponseOptions<any>;
    data = result.data;
    //   window.location.href = "/";
  } catch (error) {
    const err = error as ErrorResponse;
    data = err.message;
    console.log(data);
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen p-6 font-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Profile Card */}
          <Card>
            {/* Profile Image */}
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">Fahim</h2>
            <span className="text-green-500 font-medium inline-block mt-1">
              ● Online
            </span>
            <p className="text-gray-600 mt-2">Honesty is the best policy ✏️</p>
            <button className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
              Preview Fiverr Profile
            </button>
            <div className="mt-4 text-gray-600 text-sm">
              <p>
                From <strong>Bangladesh</strong>
              </p>
              <p>
                Member since <strong>Jul 2023</strong>
              </p>
            </div>
          </Card>

          {/* Gigs Section */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Gigs</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Gig Card */}
              <div className="bg-white rounded-lg shadow p-4">
                <div className="h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
                <p className="text-sm text-gray-800 mb-2">
                  I will be your MERN stack developer
                </p>
                <p className="text-green-500 font-bold">Starting at $5</p>
              </div>

              {/* Add New Gig */}
              <div className="flex items-center justify-center bg-white rounded-lg shadow p-4 cursor-pointer hover:bg-gray-100">
                <button className="text-4xl text-gray-400 hover:text-gray-600">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Intro Video Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h4 className="text-lg font-semibold mb-2">
              Intro Video <span className="text-sm text-gray-500">(BETA)</span>
            </h4>
            <p className="text-gray-600 mb-4">
              Stand out with a short introduction video.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Get Started
            </button>
          </div>

          {/* Portfolio Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-2">
              My Portfolio <span className="text-sm text-pink-500">NEW</span>
            </h4>
            <div className="flex space-x-4">
              {/* Portfolio Image Placeholder */}
              <div className="w-20 h-16 bg-gray-200 rounded"></div>
              <div className="w-20 h-16 bg-gray-200 rounded"></div>
              <div className="w-20 h-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Profile;
