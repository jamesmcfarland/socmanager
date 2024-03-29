import QuickFormInput from "@/components/quick-form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(2, {
    message: "Please enter a number",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const OfficeForm = ({
  userData,
  type,
  submitForm,
}: {
  userData: any;
  type: string;
  submitForm: any;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: userData.name || "",
      email: userData.email || "",
      phoneNumber: userData.officephonenumber || "",
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
          label="Phone Number"
          placeholder="0123456789"
          fieldName="phoneNumber"
          existingValue={userData?.officephonenumber}
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

export default OfficeForm;
