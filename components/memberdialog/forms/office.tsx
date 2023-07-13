import QuickFormInput from "@/components/quick-form-input";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form } from "react-hook-form";
import { FormProps } from "./formProps";

const OfficeForm = ({ form, userData, onSubmit, type }: FormProps) => {
    return (<div className="grid gap-4 py-4">
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
                <FormField
                    control={form.control}
                    name="membershipType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Membership type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="student">Student</SelectItem>
                                    <SelectItem value="associate">Associate</SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end pt-2">
                    <Button type="submit">
                        {type === "edit" ? "Save changes" : "Add member"}
                    </Button>
                </div>
            </form>
        </Form>
    </div>);
}

export default OfficeForm;