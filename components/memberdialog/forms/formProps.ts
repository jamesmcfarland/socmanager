export interface FormProps {
    form: any,
    userData: any,
    onSubmit: (data: any) => Promise<void>,
    type: string
}