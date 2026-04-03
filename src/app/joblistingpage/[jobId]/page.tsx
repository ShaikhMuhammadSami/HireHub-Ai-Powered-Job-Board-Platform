"use client";

import Image from 'next/image';

import { Box, Button, Avatar } from "@mui/material";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TwoWheelerSharpIcon from '@mui/icons-material/TwoWheelerSharp';
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

function Home() {

  return (
    <>

      <div className="max-w-300 mx-auto space-y-6">

        <Box className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between gap-3">

          <div className="space-y-4 w-full">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 pt-5">Senior Product Designer</h1>

            </div>

            <div className='flex flex-wrap gap-3 text-xl font-semibold items-center'>

              <Avatar alt="Upload new avatar" src={"/Location.png"} />
      
              <p>Loacation</p>
    
            </div>
    
            <div className="flex flex-wrap gap-6 text-gray-500 text-md items-center">

              <div className="flex items-center gap-1">

                <LocationOnOutlinedIcon fontSize="small" className="text-blue-600" />

                <span>Location</span>

              </div>

              <div className="flex items-center gap-1">

                <WorkOutlineOutlinedIcon fontSize="small" className="text-blue-600" />

                <span>300 Jobs</span>

              </div>

            </div>

            <div className="flex justify-items-start md:justify-end items-center gap-2 pr-5 font-semibold text-sm md:text-base">

              <TwoWheelerSharpIcon fontSize='large' className='text-yellow-500' />

              <span>$60k - $500k /year</span>

            </div>

          </div>

          <div className="relative rounded-lg overflow-hidden bg-gray-200">

            <Image src="/Man-image.jpeg" alt="Job Person" width={525} height={50} className="object-cover" />

          </div>

        </Box>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">

            <Box className="bg-white shadow-sm p-6 rounded-xl">

              <h2 className="text-lg font-semibold text-gray-800 my-1.5">Job Description</h2>

              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              
              <h2 className="text-lg font-semibold text-gray-800 mb-4 mt-10">Responsibilities</h2>

              <ul className="space-y-3 text-sm text-gray-500">

                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  Design user-centered products and workflows.
                </li>

                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  Collaborate with engineers and product managers.
                </li>

                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  Create design systems and documentation.
                </li>

              </ul>

              <h2 className="text-lg font-semibold text-gray-800 mb-4 mt-10">Responsibilities</h2>

              <ul className="space-y-3 pb-6 text-sm text-gray-500">

                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  Ensure accessibility and usability standards.
                </li>

                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  Work closely with stakeholders.
                </li>

              </ul>

            </Box>

          </div>

          <div className="space-y-6">

            <Box className="bg-white rounded-xl shadow-sm p-6 space-y-5">

              <h3 className="font-semibold text-gray-800">Tentacation</h3>

              <div className="flex items-center gap-3">

                <Avatar className="bg-blue-600!"> <BusinessOutlinedIcon /> </Avatar>

                <div>

                  <p className="font-medium text-gray-800">
                    TechCorp
                  </p>

                  <p className="text-sm text-gray-500">
                    www.techcorp.com
                  </p>

                </div>

              </div>

              <div className="space-y-3 text-sm text-gray-500">

                <div className="flex items-center gap-2">
                  <LocationOnOutlinedIcon fontSize="small" />
                  <span>565 Address 000</span>
                </div>

                <div className="flex items-center gap-2">
                  <LanguageOutlinedIcon fontSize="small" />
                  <span>techcorp.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <PhoneOutlinedIcon fontSize="small" />
                  <span>+00 000000000</span>
                </div>

              </div>

              <Button variant="contained" fullWidth className="rounded-lg! py-2!">
                Apply Now
              </Button>

            </Box>

            <Box className="bg-white rounded-xl shadow-sm p-6 space-y-4">

              <h3 className="font-semibold text-gray-800">Organizer</h3>

              <div className="flex items-center gap-3">

                <Avatar />

                <div>

                  <p className="font-medium text-gray-800">Ferson Sohar</p>

                  <p className="text-sm text-gray-500">Product Manager</p>

                </div>

              </div>

            </Box>

          </div>

        </div>

      </div>

    </>
  );
  
}

export default Home
