// import { DataTableDemo } from "@/components/datatable";
import DataTableHandler from "@/components/datatableHandler";
import { ModeToggle } from "@/components/theming/themetoggle";
import { UserButton } from "@clerk/nextjs";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Dashboard = async ({ params }: { params: { id: string } }) => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.functions.invoke(
    "getMembersFromOrgId",
    {
      body: { id: 1 },
    }
  );

  if (error) {
    console.warn(error);
  }
  if (data) {
    console.log(data);
  }

  return (
    <div className="h-screen flex flex-col mx-4">
      <nav className="flex flex-row justify-between py-2 px-4  border-b-2 items-center">
        <h2>socmanager</h2>
        <h1>Dashboard</h1>
        <h2>ID: {params.id}</h2>
        <div className="flex flex-row justify-between gap-x-2">
          <ModeToggle />
          <UserButton />
        </div>
      </nav>

      <DataTableHandler data={data} />
    </div>
  );
};

export default Dashboard;
