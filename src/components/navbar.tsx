import React from "react";
import styles from "../styles/navbar.module.scss";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { setTheme } = useTheme();
  const truncateContent = (content: string) => {
    if (content.length > 10) {
      return content.substring(0, 10) + "..."; // Displaying only first 7 characters
    } else {
      return content;
    }
  };
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarInnerContainer}>
          <div className={styles.webLogo}>
            <h4 className="text-xl font-semibold">Folder UI</h4>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div
                className={`${styles.userControl} flex gap-2 cursor-pointer`}
              >
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className={styles.userNameAndEmail}>
                  <p className="text-sm font-semibold">Ankit</p>
                  <p className="text-xs font-medium">
                    {truncateContent("ankitvis609@gmail.com")}
                  </p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[300px] p-8">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className={styles.userNameAndEmail}>
                  <p className="text-sm font-semibold">Ankit Vishwakarma</p>
                  <p className="text-xs font-medium">ankitvis609@gmail.com</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
