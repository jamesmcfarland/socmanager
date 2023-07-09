import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import * as z from "zod";
import QuickFormInput from "../quick-form-input";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  studentNumber: z.number({
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

interface addEditUserPropsCommon {
  type: "add" | "edit";
  buttonVariant?: "outline" | "default";
  userId?: string;
  dropdown?: boolean;
}

export function AddEditUserDialog({
  type,
  buttonVariant = "default",
  userId,
  dropdown = false,
}: addEditUserPropsCommon) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    //POST the data to /api/organisation/create
    // try {
    //   console.log("POSTING");
    //   const resp = await fetch("/api/organisation/create", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //   });
    //   const json = await resp.json();
    //   toast({
    //     title: "RX:",
    //     description: (
    //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //         <code className="text-white">{JSON.stringify(json, null, 2)}</code>
    //       </pre>
    //     ),
    //   });
    //   console.log(json.id);
    // } catch (err) {
    //   toast({
    //     title: "ERR",
    //     description: (
    //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //         <code className="text-white">{JSON.stringify(err, null, 2)}</code>
    //       </pre>
    //     ),
    //   });
    // }
  }
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          {type.substring(0, 1).toUpperCase() + type.substring(1)} member
        </DialogTitle>
        <DialogDescription>
          {type === "add"
            ? "Add a new member below, hit save when you're done"
            : "  Make changes here. Click save when you're done."}
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
            <QuickFormInput
              control={form.control}
              label="Name"
              placeholder="John Doe"
              fieldName="name"
            />
            <QuickFormInput
              control={form.control}
              label="Email"
              placeholder="joe@bloggs.com"
              fieldName="email"
            />
            <QuickFormInput
              control={form.control}
              label="Student Number"
              placeholder="12345678"
              fieldName="studentNumber"
            />
            <QuickFormInput
              control={form.control}
              label="Course"
              placeholder="Software Engineering"
              fieldName="course"
            />
            <FormField
              control={form.control}
              name="membershipType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
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
      </div>
    </DialogContent>
  );
}
