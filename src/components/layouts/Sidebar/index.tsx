"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import {
	AiOutlineCalendar,
	AiOutlineHome,
	AiOutlineLogout,
	AiOutlineMessage,
} from "react-icons/ai";
import { BsBuildings, BsGear } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
	const router = useRouter();
	return (
		<div className="pb-12 min-h-screen">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
					<Button
						variant={"ghost"}
						className="w-full justify-start rounded-none hover:text-primary"
						onClick={() => router.push("/")}
					>
						<AiOutlineHome className="mr-1 text-lg" />
						Home
					</Button>
					<Button
						variant={"ghost"}
						className="w-full justify-start rounded-none hover:text-primary"
					>
						<AiOutlineMessage className="mr-1 text-lg" />
						Messages
					</Button>
					<Button
						variant={"ghost"}
						className="w-full justify-start rounded-none hover:text-primary"
					>
						<BsBuildings className="mr-1 text-lg" />
						Company Profile
					</Button>
					<Button
						variant={"ghost"}
						className="w-full justify-start rounded-none hover:text-primary"
					>
						<HiOutlineUserGroup className="mr-1 text-lg" />
						All Applicants
					</Button>
					<Button
						variant={"ghost"}
						className="w-full justify-start rounded-none hover:text-primary"
						onClick={() => router.push("/job-listings")}
					>
						<HiOutlineClipboardDocumentList className="mr-1 text-lg" />
						Job Listings
					</Button>
					<Button
						variant={"ghost"}
						className="w-full justify-start rounded-none hover:text-primary"
					>
						<AiOutlineCalendar className="mr-1 text-lg" />
						My Schedule
					</Button>
				</div>
				<div className="space-y-4 py-4">
					<div className="px-3 py-2">
						<h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<BsGear className="mr-1 text-lg" />
							Settings
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none text-red-500 hover:text-red-500 hover:bg-red-200"
						>
							<AiOutlineLogout className="mr-1 text-lg" />
							Logout
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
