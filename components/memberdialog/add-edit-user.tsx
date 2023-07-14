import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
import UniversityForm from "./forms/universityform";
import OfficeForm from "./forms/officeform";
import FormSwitcher from "./forms/formSwitcher";

interface props {
  type: "add" | "edit";
  userData?: UserData;
  organisationType: string;
  dropdown?: boolean;
  id?: string;
  organisationType: string;
}

export function AddEditUserDialog({
  type,
  buttonVariant = "default",
  userData,
  dropdown = false,
  organisationType,
}: addEditUserPropsCommon) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  // });

  // async function onSubmit(data: z.infer<typeof formSchema>) {
  //   console.log("SUBMITT");
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
  // }
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          {type.substring(0, 1).toUpperCase() + type.substring(1)} member (
          {organisationType})
        </DialogTitle>
        <DialogDescription>
          {type === "add"
            ? "Add a new member below, hit save when you're done"
            : "  Make changes here. Click save when you're done."}
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <FormSwitcher
          userData={userData}
          organisationType={organisationType}
          type={type}
        />
      </div>
    </DialogContent>
  );
}
