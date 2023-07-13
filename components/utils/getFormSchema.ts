import * as z from "zod";

interface props {
    organisationType: string;
}


const schemas: any = {
    "university": z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        studentNumber: z.number({
            required_error: "Please enter a student number.",
        }),
        year: z.number({
            required_error: "Please enter a year of study.",
        }),
        course: z.string({
            required_error: "Please enter a course.",
        }),
        membershipType: z.string({
            required_error: "Please select a membership typ.",
        }),
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
    }),
    "community": z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        phoneNumber: z.string().min(6, {
            message: "Please enter a valid email address.",
        }),
    }),
    "office": z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        phoneNumber: z.string().min(6, {
            message: "Please enter a valid email address.",
        }),
    }),
}


export const getFormSchema = ({ organisationType }: props) => {
    return schemas[organisationType];
}