"use client";

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
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from "@/constants";
import ButtonActionTable from "@/components/organization/ButtonActionTable";

interface ApplicantsProps {}

const Applicants: FC<ApplicantsProps> = () => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					{JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
						<TableHead key={item + i}>{item}</TableHead>
					))}
					<TableHead>Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{JOB_APPLICANT_DATA.map((item: any, i: number) => (
					<TableRow key={item.name + i}>
						<TableCell>{item.name}</TableCell>
						<TableCell>{item.appliedDate}</TableCell>
						<TableCell>
							<ButtonActionTable url="" />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default Applicants;
