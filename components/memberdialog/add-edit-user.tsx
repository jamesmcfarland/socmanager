import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormHandler from "./forms/formHandler";
import { DefaultUserData, UserData } from "../types/UserData";

interface props {
  type: "add" | "edit";
  userData?: UserData;
  organisationType: string;
  dropdown?: boolean;
  id?: string;
}

export function AddEditUserDialog({ type, userData, organisationType }: props) {
  userData = userData || DefaultUserData();

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
          {type.substring(0, 1).toUpperCase() + type.substring(1)} member
        </DialogTitle>
        <DialogDescription>
          {type === "add"
            ? "Add a new member below, hit save when you're done"
            : "  Make changes here. Click save when you're done."}
        </DialogDescription>
      </DialogHeader>
      <FormHandler
        type={type}
        userData={userData}
        organisationType={organisationType}
      />
    </DialogContent>
  );
}
