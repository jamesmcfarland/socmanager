import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { DataTableDemo } from "./datatable";
import { cookies } from "next/headers";

const DataTableHandler = async ({ id }: { id: any }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.functions.invoke(
    "getMembersFromOrgId",
    {
      body: { id: id },
    }
  );

  if (error) {
    console.warn(error);
  }
  if (data) {
    console.log(data);
  }

  if (data.length > 0) {
    return <DataTableDemo data={data} type={data[0].organisationtype} />;
  } else {
    return <div>Data missing</div>;
  }
};

export default DataTableHandler;
