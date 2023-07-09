import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface QuickFormInputProps {
  control: any;
  label: string;
  placeholder: string;
  fieldName: string;
}

const QuickFormInput = ({
  control,
  label,
  placeholder,
  fieldName,
}: QuickFormInputProps) => {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default QuickFormInput;
