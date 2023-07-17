import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import FormSwitcher from "./forms/formSwitcher";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface props {
  type: "add" | "edit";
  userData?: any;
  organisationType: string;
  organisationId: string;
}

export async function AddEditUserDialog({
  type,
  userData,
  organisationType,
  organisationId,
}: props) {
  const supabase = createClientComponentClient();

  const submitForm = async (data: any) => {
    const { data: response, error } = await supabase.functions.invoke(
      "addOrEditMember",
      {
        body: { ...data, organisationId, organisationType },
      }
    );
    if (error) {
      console.warn(error);
    }
    if (response) {
      console.log(response);
    }
  };

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
          submitForm={submitForm}
        />
      </div>
    </DialogContent>
  );
}
