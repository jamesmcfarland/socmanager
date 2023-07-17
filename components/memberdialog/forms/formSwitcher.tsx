import CommunityForm from "./communityform";
import OfficeForm from "./officeform";
import UniversityForm from "./universityform";

const FormSwitcher = ({
  organisationType,
  userData,
  type,
  submitForm,
}: {
  organisationType: string;
  userData: any;
  type: string;
  submitForm?: any;
}) => {
  switch (organisationType) {
    case "office":
      return (
        <OfficeForm userData={userData} type={type} submitForm={submitForm} />
      );
    case "community":
      return (
        <CommunityForm
          userData={userData}
          type={type}
          submitForm={submitForm}
        />
      );
    case "university":
      return (
        <UniversityForm
          userData={userData}
          type={type}
          submitForm={submitForm}
        />
      );
    default:
      return <div>Something went wrong</div>;
  }
};

export default FormSwitcher;
