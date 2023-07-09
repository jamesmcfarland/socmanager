import { AddEditUserDialog } from "./add-edit-user";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";

const AddUserDialog = ({
  buttonVariant,
}: {
  buttonVariant: "outline" | "default";
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>Add member</Button>
      </DialogTrigger>
      <AddEditUserDialog type="add" />
    </Dialog>
  );
};

export default AddUserDialog;
