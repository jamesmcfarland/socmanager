import { AddEditUserDialog } from "./add-edit-user";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";

const AddUserDialog = ({
  buttonVariant,
  organisationType,
}: {
  buttonVariant: "outline" | "default";
  organisationType: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>Add member</Button>
      </DialogTrigger>
      <AddEditUserDialog type="add" organisationType={organisationType} />
    </Dialog>
  );
};

export default AddUserDialog;
