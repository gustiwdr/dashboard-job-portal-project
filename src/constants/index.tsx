import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
	"Full-Time",
	"Part-Time",
	"Remote",
	"Internship",
];

export const JOB_LISTING_COLUMNS: string[] = [
	"Roles",
	"Status",
	"Date Posted",
	"Job Type",
	"Applicants",
	"Needs",
];

export const JOB_LISTING_DATA = [
	{
		roles: "Software Engineer",
		status: "Live",
		datePosted: "12 Aug 2025",
		dueDate: "19 Aug 2025",
		applicants: 5,
		needs: 4,
	},
];
