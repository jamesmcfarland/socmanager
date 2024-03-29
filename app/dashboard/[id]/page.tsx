// import { DataTableDemo } from "@/components/datatable";
import DataTableHandler from "@/components/datatableHandler";
import { ModeToggle } from "@/components/theming/themetoggle";
import { UserButton } from "@clerk/nextjs";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Dashboard = async ({ params }: { params: { id: string } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.functions.invoke(
    "getOrgInfoFromOrgId",
    {
      body: { id: params.id },
    }
  );
  let organisationName;
  let organisationType;
  if (!error) {
    if (data.length) {
      console.log(data);
      organisationName = data[0].organisationname;
      organisationType = data[0].organisationtype;
    }
  }

  return (
    <div className="h-screen flex flex-col mx-4">
      <nav className="flex flex-row justify-between py-2 px-4  border-b-2 items-center">
        <h2>socmanager</h2>
        <h1>Dashboard</h1>
        <h2>
          {organisationName} ({params.id})
        </h2>
        <div className="flex flex-row justify-between gap-x-2">
          <ModeToggle />
          <UserButton />
        </div>
      </nav>

      <DataTableHandler id={params.id} organisationType={organisationType} />
    </div>
  );
};

export default Dashboard;
