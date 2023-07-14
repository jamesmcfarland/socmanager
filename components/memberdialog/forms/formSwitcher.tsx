import CommunityForm from "./communityform";
import OfficeForm from "./officeform";
import UniversityForm from "./universityform";

const FormSwitcher = ({
  organisationType,
  userData,
  type,
}: {
  organisationType: string;
  userData: any;
  type: string;
}) => {
  switch (organisationType) {
    case "office":
      return <OfficeForm userData={userData} type={type} />;
    case "community":
      return <CommunityForm userData={userData} type={type} />;
    case "university":
      return <UniversityForm userData={userData} type={type} />;
    default:
      return <div>Something went wrong</div>;
  }
};

export default FormSwitcher;
