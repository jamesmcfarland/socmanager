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
  existingValue?: string;
}

const QuickFormInput = ({
  control,
  label,
  placeholder,
  fieldName,
  existingValue,
}: QuickFormInputProps) => {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              defaultValue={existingValue}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default QuickFormInput;
