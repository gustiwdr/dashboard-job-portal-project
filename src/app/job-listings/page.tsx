import React, { FC } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "@/constants";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon, MoreVertical } from "lucide-react";

interface JobListingsPageProps {}

const JobListingsPage: FC<JobListingsPageProps> = ({}) => {
	return (
		<div>
			<div className="text-3xl font-semibold">Job Listings</div>
			<div className="mt-10">
				<Table>
					<TableCaption>Recent job listings</TableCaption>
					<TableHeader>
						<TableRow>
							{JOB_LISTING_COLUMNS.map((item: string, i: number) => (
								<TableHead key={item + i}>{item}</TableHead>
							))}
							<TableHead>Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{JOB_LISTING_DATA.map((item: any, i: number) => (
							<TableRow key={item.roles + i}>
								<TableCell>{item.roles}</TableCell>
								<TableCell>
									<Badge>{item.status}</Badge>
								</TableCell>
								<TableCell>{item.datePosted}</TableCell>
								<TableCell>{item.dueDate}</TableCell>
								<TableCell>
									<Badge variant="outline">{item.jobType}</Badge>
								</TableCell>
								<TableCell>{item.applicants}</TableCell>
								<TableCell>
									{item.applicants} / {item.needs}
								</TableCell>
								<TableCell>
									<Button size="icon" variant="outline">
										<MoreVertical className="w-4 h-4" />
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default JobListingsPage;
