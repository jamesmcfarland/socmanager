import { UserButton, UserProfile } from "@clerk/nextjs";

const Dashboard = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserButton />
      <h2>{params.id}</h2>
    </div>
  );
};

export default Dashboard;
