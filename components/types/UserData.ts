export interface UserData {
  name: string | "";
  email: string | "";
  phoneNumber: string | "";
  universitystudentnumber?: string | "";
  universityyear?: number | "";
  universitycourse?: string | "";
  universitymembershipType?: string | "";
}

export const DefaultUserData = () => {
  return {
    name: "",
    email: "",
    phoneNumber: "",
    universitystudentnumber: "",
    universityyear: "",
    universitycourse: "",
    universitymembershipType: "",
  } as UserData;
};
