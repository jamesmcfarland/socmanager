import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { DataTableDemo } from "./datatable";
import { cookies } from "next/headers";

const DataTableHandler = async ({
  id,
  organisationType,
}: {
  id: any;
  organisationType: string;
}) => {
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

  if (data.length > 0) {
    return <DataTableDemo data={data} organisationType={organisationType} />;
  } else {
    return <div>Data missing</div>;
  }
};

export default DataTableHandler;
