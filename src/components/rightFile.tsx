import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function rightFile({ data, child }) {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <div className="flex justify-center flex-col items-center cursor-pointer font-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  width={60}
                  height={60}
                  id="txt-file"
                >
                  <path
                    fill="#f4f4f3"
                    d="M414.2,121.5v317.6c0,7.4-6,13.4-13.4,13.4H111.2c-7.4,0-13.4-6-13.4-13.4V72.9c0-7.4,6-13.4,13.4-13.4h237.6
			L414.2,121.5z"
                  ></path>
                  <path
                    fill="#edeceb"
                    d="M414.2,121.5h-52.1c-7.4,0-13.4-6-13.4-13.4V59.5L414.2,121.5z"
                  ></path>
                  <rect
                    width="316.5"
                    height="103.3"
                    x="97.8"
                    y="307.9"
                    fill="#90d4f5"
                  ></rect>
                  <g>
                    <path
                      fill="#f4f4f3"
                      d="M217.5 335.7h-15.8v52c0 3-.7 5.2-2 6.7-1.3 1.4-3.1 2.2-5.2 2.2-2.1 0-3.9-.7-5.2-2.2-1.4-1.5-2-3.7-2-6.6v-52h-15.8c-2.5 0-4.3-.5-5.5-1.6-1.2-1.1-1.8-2.5-1.8-4.3 0-1.9.6-3.3 1.9-4.4 1.3-1.1 3.1-1.6 5.4-1.6h46.1c2.5 0 4.4.6 5.6 1.7 1.2 1.1 1.8 2.6 1.8 4.3 0 1.8-.6 3.2-1.9 4.3C221.9 335.2 220 335.7 217.5 335.7zM230.9 381.4l16-23.4-13.5-20.8c-1.3-2-2.2-3.8-2.9-5.2-.6-1.4-1-2.8-1-4.2 0-1.4.6-2.6 1.8-3.7 1.2-1.1 2.7-1.6 4.5-1.6 2 0 3.6.6 4.7 1.8 1.1 1.2 2.7 3.4 4.7 6.6l10.7 17.4 11.5-17.4c.9-1.5 1.7-2.7 2.4-3.8.7-1 1.3-1.9 1.9-2.6.6-.7 1.3-1.2 2.1-1.5.8-.3 1.7-.5 2.7-.5 1.8 0 3.3.5 4.5 1.6 1.2 1.1 1.7 2.4 1.7 3.9 0 2.2-1.3 5.1-3.8 8.9L265 358l15.2 23.4c1.4 2.1 2.4 3.8 3 5.1.6 1.4.9 2.6.9 3.8 0 1.1-.3 2.2-.8 3.1-.6.9-1.3 1.7-2.3 2.2-1 .6-2.1.8-3.4.8-1.4 0-2.5-.3-3.5-.9-.9-.6-1.7-1.3-2.3-2.1-.6-.8-1.7-2.5-3.3-4.9l-12.6-19.8-13.4 20.4c-1 1.6-1.8 2.8-2.2 3.4-.4.7-1 1.3-1.6 1.9-.6.6-1.4 1.1-2.2 1.5-.8.4-1.8.5-3 .5-1.8 0-3.2-.5-4.4-1.6-1.2-1.1-1.7-2.6-1.7-4.7C227.4 387.9 228.5 384.9 230.9 381.4zM340.4 335.7h-15.8v52c0 3-.7 5.2-2 6.7-1.3 1.4-3.1 2.2-5.2 2.2-2.1 0-3.9-.7-5.2-2.2-1.4-1.5-2-3.7-2-6.6v-52h-15.8c-2.5 0-4.3-.5-5.5-1.6-1.2-1.1-1.8-2.5-1.8-4.3 0-1.9.6-3.3 1.9-4.4 1.3-1.1 3.1-1.6 5.4-1.6h46.1c2.5 0 4.4.6 5.6 1.7 1.2 1.1 1.8 2.6 1.8 4.3 0 1.8-.6 3.2-1.9 4.3C344.8 335.2 342.9 335.7 340.4 335.7z"
                    ></path>
                  </g>
                </svg>
                {data}
              </div>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-xs">
              <p>Type: {child.type}</p>
              <p>Size: {child.size}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[450px] p-8">
        <div className="flex flex-col gap-4">
          <p className="text-lg">{data}</p>
          <p className="text-sm">{child.contant}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
