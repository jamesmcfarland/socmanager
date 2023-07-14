import QuickFormInput from "@/components/quick-form-input";
import { Button } from "@/components/ui/button";
import { Form, useForm } from "react-hook-form";
import { FormProps } from "../../types/FormProps";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(6, {
    message: "Please enter a valid email address.",
  }),
});

const OfficeForm = ({ userData, type }: FormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("SUBMITT", data);
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
    <div className="grid gap-4 py-4">
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
            existingValue={userData?.universitystudentnumber}
          />
          <QuickFormInput
            control={form.control}
            label="Course"
            placeholder="Software Engineering"
            fieldName="course"
            existingValue={userData?.universitycourse}
          />

          <div className="flex justify-end pt-2">
            <Button type="submit">
              {type === "edit" ? "Save changes" : "Add member"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OfficeForm;
