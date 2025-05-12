import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
	roles: z
		.string({ required_error: "Job Title is required" })
		.min(80, { message: "Job Title must be at least 80 characters" }),
	jobType: z.enum(JOBTYPES, {
		required_error: "You need to select a job type",
	}),
	salaryFrom: z.string({ required_error: "Salary From is required" }),
	salaryTo: z.string({ required_error: "Salary To is required" }),
	categoryId: z.string({ required_error: "You need to select a category" }),
	requiredSkills: z
		.string()
		.array()
		.nonempty({ message: "At least one required skill must be added" }),
	jobDescription: z
		.string({ required_error: "A job description is required" })
		.min(10, {
			message: "The job description must be at least 10 characters long",
		}),
	responsibility: z
		.string({ required_error: "Responsibilities are required" })
		.min(10, {
			message:
				"The responsibilities section must be at least 10 characters long",
		}),
	whoYouAre: z
		.string({ required_error: "A 'Who You Are' description is required" })
		.min(10, {
			message: "The 'Who You Are' section must be at least 10 characters long",
		}),
	niceToHave: z
		.string({ required_error: "A 'Nice to Have' description is required" })
		.min(10, {
			message: "The 'Nice to Have' section must be at least 10 characters long",
		}),
	benefits: z
		.object({
			benefit: z.string(),
			description: z.string(),
		})
		.array()
		.nonempty({ message: "You must add at least one benefit" }),
});
