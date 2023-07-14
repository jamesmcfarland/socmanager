import CommunityForm from "./community";
import { FormProps } from "../../types/FormProps";
import OfficeForm from "./office";
import UniversityForm from "./university";

const FormHandler = ({ userData, type, organisationType }: FormProps) => {
  switch (organisationType) {
    case "office":
      return <OfficeForm userData={userData} type={type} />;
    case "community":
      return <CommunityForm userData={userData} type={type} />;
    case "university":
      return <UniversityForm userData={userData} type={type} />;
  }
};

export default FormHandler;
