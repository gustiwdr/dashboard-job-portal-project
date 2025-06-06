"use client";

import { jobFormSchema } from "@/lib/form-schema";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import FieldInput from "@/components/organization/FieldInput";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { JOBTYPES } from "@/constants";
import InputSkills from "@/components/organization/InputSkills";
import CKEditor from "@/components/organization/CKEditor";
import InputBenefits from "@/components/organization/InputBenefits";
import { Button } from "@/components/ui/button";

interface PostJobPageProps {}

const PostJobPage: FC<PostJobPageProps> = ({}) => {
	const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

	const form = useForm<z.infer<typeof jobFormSchema>>({
		resolver: zodResolver(jobFormSchema),
		defaultValues: {
			requiredSkills: [],
      benefits: [],
		},
	});

	const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
		console.log(val);
	};

	useEffect(() => {
		setEditorLoaded(true);
	}, []);

	return (
		<div>
			<div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
				<ArrowLeftIcon className="" />
				<span className="text-2xl font-semibold">Post a Job</span>
			</div>

			<div className="my-5">
				<div className="text-lg font-semibold">Basic Information</div>
				<div className="text-gray-400">
					List out your top perks and benefits.
				</div>
			</div>

			<Separator />

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="mt-5 space-y-12 pt-6"
				>
					<FieldInput
						title="Job Title"
						subtitle="Job titles must describe one position"
					>
						<FormField
							control={form.control}
							name="roles"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="e.g. Software Engineer"
											{...field}
										/>
									</FormControl>
									<FormDescription>At least 80 characters</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FieldInput>

					<FieldInput
						title="Type of Employment"
						subtitle="You can select multiple types of employment"
					>
						<FormField
							control={form.control}
							name="jobType"
							render={({ field }) => (
								<FormItem className="space-y-3">
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex flex-col space-y-1"
										>
											{JOBTYPES.map((item: string, i: number) => (
												<FormItem
													key={item + 1}
													className="flex items-center space-x-3 space-y-0"
												>
													<FormControl>
														<RadioGroupItem value={item} />
													</FormControl>
													<FormLabel className="font-normal">{item}</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FieldInput>

					<FieldInput
						title="Salary"
						subtitle="Please specify the estimated salary range for the role"
					>
						<div className="w-[450px] flex flex-row justify-between items-center">
							<FormField
								control={form.control}
								name="salaryFrom"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input className="w-full" placeholder="$100" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<span className="text-center">To</span>
							<FormField
								control={form.control}
								name="salaryTo"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="w-full"
												placeholder="$1000"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</FieldInput>

					<FieldInput
						title="Categories"
						subtitle="You can select a job category"
					>
						<FormField
							control={form.control}
							name="categoryId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Select Job Categories</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="w-[450px]">
												<SelectValue placeholder="Select Job Categories" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="1">Category 1</SelectItem>
											<SelectItem value="2">Category 2</SelectItem>
											<SelectItem value="3">Category 3</SelectItem>
											<SelectItem value="4">Category 4</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FieldInput>

					<FieldInput
						title="Required Skills"
						subtitle="Add the required skills for this role"
					>
						<InputSkills form={form} name="requiredSkills" label="Add Skills" />
					</FieldInput>

					<FieldInput
						title="Job Description"
						subtitle="Job titles must describe one position"
					>
						<CKEditor
							form={form}
							name="jobDescription"
							editorLoaded={editorLoaded}
						/>
					</FieldInput>

					<FieldInput
						title="Responsibilities"
						subtitle="Outline the core responsibilities for the position"
					>
						<CKEditor
							form={form}
							name="responsibility"
							editorLoaded={editorLoaded}
						/>
					</FieldInput>

					<FieldInput
						title="Who You Are"
						subtitle="Add your preferred candidate's qualifications"
					>
						<CKEditor
							form={form}
							name="whoYouAre"
							editorLoaded={editorLoaded}
						/>
					</FieldInput>

					<FieldInput
						title="Nice-To-Haves"
						subtitle="Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply"
					>
						<CKEditor
							form={form}
							name="niceToHave"
							editorLoaded={editorLoaded}
						/>
					</FieldInput>

					<FieldInput
						title="Perks and Benefits"
						subtitle="Encourage more candidates to apply by adding attractive rewards and benefits your company offers"
					>
						<InputBenefits form={form} />
					</FieldInput>

					<div className="flex justify-end">
						<Button size="lg">Do a Review</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default PostJobPage;
