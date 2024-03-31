import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function rightFolder({ data, child }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex justify-center flex-col items-center cursor-pointer font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width={60}
              height={60}
              viewBox="0 0 120 120"
              id="files"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="-572.109"
                  x2="-572.109"
                  y1="-746.287"
                  y2="-744.279"
                  gradientTransform="matrix(45.6353 0 0 -27.5386 26168.358 -20456.94)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#1d77f2"></stop>
                  <stop offset="1" stop-color="#18c1fa"></stop>
                </linearGradient>
              </defs>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M0,94.05v-68a25.94821,25.94821,0,0,1,26-26H94a25.94821,25.94821,0,0,1,26,26v68a25.94821,25.94821,0,0,1-26,26H26A26.012,26.012,0,0,1,0,94.05Z"
              ></path>
              <g data-name='Home-Screen-11"'>
                <path
                  fill="#1aa6f7"
                  fill-rule="evenodd"
                  d="M22,25.25H35.5a7.56976,7.56976,0,0,1,5.3,2.1c3.1,2.8,5.2,4.3,6.5,4.3,1.2,0-5.4,5.6-19.9,16.8a8.19988,8.19988,0,0,1-13.2-6.5v-8.8A7.832,7.832,0,0,1,22,25.25Z"
                ></path>
                <path
                  fill="#1aa6f7"
                  fill-rule="evenodd"
                  d="M39.3,31.55H98a7.81,7.81,0,0,1,7.8,7.8v17.6a7.81,7.81,0,0,1-7.8,7.8H39.3a7.81,7.81,0,0,1-7.8-7.8V39.35A7.87514,7.87514,0,0,1,39.3,31.55Z"
                  data-name="Rectangle-31"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M20.9,36.35H99.1a1.89869,1.89869,0,0,1,1.9,1.9v29.3a1.89869,1.89869,0,0,1-1.9,1.9H20.9a1.89869,1.89869,0,0,1-1.9-1.9V38.25A1.78438,1.78438,0,0,1,20.9,36.35Z"
                ></path>
                <path
                  fill="url(#a)"
                  fill-rule="evenodd"
                  d="M18.1,39.45h83.8a3.90479,3.90479,0,0,1,3.9,3.9v43.6a7.81,7.81,0,0,1-7.8,7.8H22a7.81,7.81,0,0,1-7.8-7.8V43.35A3.90474,3.90474,0,0,1,18.1,39.45Z"
                ></path>
              </g>
            </svg>
            {data}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-xs">
            <p>Type: {child.type}</p>
            <p>Size: {child.size}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
