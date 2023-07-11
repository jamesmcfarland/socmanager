import { DataTableDemo } from "./datatable";

const DataTableHandler = ({ data }: { data: any }) => {
  if (data.length > 0) {
    switch (data[0].organisationtype) {
      case "university":
        return <DataTableDemo data={data} />;
      default:
        return <div>not ready ({data[0].organisationtype})</div>;
    }
  } else {
    return <div>Data missing</div>;
  }
};

export default DataTableHandler;
