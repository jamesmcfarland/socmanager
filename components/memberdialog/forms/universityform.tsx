import QuickFormInput from "@/components/quick-form-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  studentNumber: z.string({
    required_error: "Please enter a student number.",
  }),
  year: z.number({
    required_error: "Please enter a year of study.",
  }),
  course: z.string({
    required_error: "Please enter a course.",
  }),
  membershipType: z.string({
    required_error: "Please select a membership typ.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const UniversityForm = ({
  userData,
  type,
  submitForm,
}: {
  userData: any;
  type: string;
  submitForm?: any;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      membershipType: userData.universitymembershiptype || "student",
      course: userData.universitycourse || "",
      year: userData.universityyear || 0,
      studentNumber: userData.universitystudentnumber || "",
      name: userData.name || "",
      email: userData.email || "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    submitForm(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
        <QuickFormInput
          control={form.control}
          label="Name"
          placeholder="John Doe"
          fieldName="name"
          existingValue={userData?.name}
        />
        <QuickFormInput
          control={form.control}
          label="Email"
          placeholder="joe@bloggs.com"
          fieldName="email"
          existingValue={userData?.email}
        />
        <QuickFormInput
          control={form.control}
          label="Student Number"
          placeholder="12345678"
          fieldName="studentNumber"
          type="number"
          existingValue={userData?.universitystudentnumber}
        />
        <QuickFormInput
          control={form.control}
          label="Course"
          placeholder="Software Engineering"
          fieldName="course"
          existingValue={userData?.universitycourse}
        />
        <FormField
          control={form.control}
          name="membershipType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Membership Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Membership type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="associate">Associate</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end pt-2">
          <Button type="submit">
            {type === "edit" ? "Save changes" : "Add member"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UniversityForm;
