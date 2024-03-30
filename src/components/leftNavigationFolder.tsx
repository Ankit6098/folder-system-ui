import React, { useState } from "react";
import File from "./leftNavigationFile";

interface Folder {
  folder: {};
}

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Folder({ folder }: Folder) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="flex items-center gap-1 text-sm font-medium cursor-pointer"
              onClick={toggleFolder}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                fill="none"
                id="down"
                viewBox="0 0 24 24"
                className="drop-shadow-xl"
              >
                <path
                  fill="#000"
                  d="M5.305 8.306a1.046 1.046 0 0 0 0 1.478l5.904 5.91c.228.228.536.33.834.302.27 0 .539-.101.744-.306l5.907-5.907a1.044 1.044 0 1 0-1.477-1.477l-5.22 5.22-5.216-5.22a1.043 1.043 0 0 0-1.476 0Z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                data-name="Layer 1"
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
                    <stop offset="0" stopColor="#1d77f2"></stop>
                    <stop offset="1" stopColor="#18c1fa"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M0,94.05v-68a25.94821,25.94821,0,0,1,26-26H94a25.94821,25.94821,0,0,1,26,26v68a25.94821,25.94821,0,0,1-26,26H26A26.012,26.012,0,0,1,0,94.05Z"
                ></path>
                <g data-name='Home-Screen-11"'>
                  <path
                    fill="#1aa6f7"
                    fillRule="evenodd"
                    d="M22,25.25H35.5a7.56976,7.56976,0,0,1,5.3,2.1c3.1,2.8,5.2,4.3,6.5,4.3,1.2,0-5.4,5.6-19.9,16.8a8.19988,8.19988,0,0,1-13.2-6.5v-8.8A7.832,7.832,0,0,1,22,25.25Z"
                  ></path>
                  <path
                    fill="#1aa6f7"
                    fillRule="evenodd"
                    d="M39.3,31.55H98a7.81,7.81,0,0,1,7.8,7.8v17.6a7.81,7.81,0,0,1-7.8,7.8H39.3a7.81,7.81,0,0,1-7.8-7.8V39.35A7.87514,7.87514,0,0,1,39.3,31.55Z"
                    data-name="Rectangle-31"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M20.9,36.35H99.1a1.89869,1.89869,0,0,1,1.9,1.9v29.3a1.89869,1.89869,0,0,1-1.9,1.9H20.9a1.89869,1.89869,0,0,1-1.9-1.9V38.25A1.78438,1.78438,0,0,1,20.9,36.35Z"
                  ></path>
                  <path
                    fill="url(#a)"
                    fillRule="evenodd"
                    d="M18.1,39.45h83.8a3.90479,3.90479,0,0,1,3.9,3.9v43.6a7.81,7.81,0,0,1-7.8,7.8H22a7.81,7.81,0,0,1-7.8-7.8V43.35A3.90474,3.90474,0,0,1,18.1,39.45Z"
                  ></path>
                </g>
              </svg>
              <p>{folder.name}</p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-xs">
              <p>Type: {folder.type}</p>
              <p>Size: {folder.size}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {isOpen && (
        <div style={{ marginLeft: "20px" }}>
          {folder.children.map((item) => (
            <div key={item.name}>
              {item.type === "folder" ? (
                <Folder folder={item} />
              ) : (
                <File
                  name={item.name}
                  size={item.size}
                  contant={item.contant}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
