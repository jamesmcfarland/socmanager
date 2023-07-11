import { DataTableDemo } from "./datatable";

const DataTableHandler = ({ data }: { data: any }) => {
  if (data.length > 0) {
    return <DataTableDemo data={data} type={data[0].organisationtype} />;
  } else {
    return <div>Data missing</div>;
  }
};

export default DataTableHandler;
