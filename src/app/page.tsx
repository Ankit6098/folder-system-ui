"use client";

import { useState } from "react";

import styles from "/src/styles/home.module.scss";
import Link from "next/link";
import jsonData from "../../data/fileData";
import Folder from "@/components/leftNavigationFolder";

// components
import Navbar from "@/components/navbar";

// shadcn
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import RightNavigationFolder from "@/components/rightNavigationFolder";

export default function Home() {
  return (
    <>
      <Navbar />
      <ResizablePanelGroup
        direction="horizontal"
        className={styles.resizableWindow}
      >
        <ResizablePanel
          defaultSize={15}
          minSize={15}
          className={`${styles.resizableLeftPanel}  p-6 rounder-xl`}
        >
          <div className="flex">
            <Folder folder={jsonData} />
          </div>
        </ResizablePanel>
        <ResizableHandle className="w-[0.5px] h-4/5 bg-gray-300" />
        <ResizablePanel
          defaultSize={75}
          className={`${styles.resizableRightPanel}  p-6 rounder-xl`}
        >
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link href="/components">Components</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <RightNavigationFolder />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
