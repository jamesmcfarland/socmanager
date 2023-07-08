import { ModeToggle } from "@/components/themetoggle";
import { UserButton, UserProfile } from "@clerk/nextjs";

const Dashboard = ({ params }: { params: { id: string } }) => {
  return (
    <div className="h-screen flex flex-col">
      <nav className="flex flex-row justify-between py-2 px-4  border-b-2 items-center">
        <h2>socmanager</h2>
        <h1>Dashboard</h1>
        <h2>ID: {params.id}</h2>
        <div className="flex flex-row justify-between gap-x-2">
          <ModeToggle />
          <UserButton />
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
