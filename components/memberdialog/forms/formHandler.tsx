import CommunityForm from "./community";
import { FormProps } from "./formProps";
import OfficeForm from "./office";
import UniversityForm from "./university";




const FormHandler = ({ userData, type, form, onSubmit }: FormProps) => {
    switch (userData.organisationtype) {
        case "office":
            return (<OfficeForm userData={userData} type={type} form={form} onSubmit={onSubmit} />)
        case "community":
            return (<CommunityForm userData={userData} type={type} form={form} onSubmit={onSubmit} />)
        case "university":
            return (<UniversityForm userData={userData} type={type} form={form} onSubmit={onSubmit} />)
    }
}

export default FormHandler;