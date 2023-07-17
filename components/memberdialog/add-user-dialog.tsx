import { AddEditUserDialog } from "./add-edit-user";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";

const AddUserDialog = ({
  buttonVariant,
  organisationType,
  organisationId,
}: {
  buttonVariant: "outline" | "default";
  organisationType: string;
  organisationId: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>Add member</Button>
      </DialogTrigger>
      <AddEditUserDialog
        type="add"
        organisationType={organisationType}
        organisationId={organisationId}
      />
    </Dialog>
  );
};

export default AddUserDialog;
