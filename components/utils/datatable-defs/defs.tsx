import DropdownContainer from "@/components/memberdialog/dropdown-container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

const formatYear = (year: number) => {
  switch (year) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return `${year}th`;
  }
};

//format ISO date as dd/mm/yyyy
const formatDate = (date: string) => {
  const dateObj = new Date(date);
  let day: any = dateObj.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month: any = dateObj.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
};

export const universityColumns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },

  {
    accessorKey: "universitystudentnumber",
    header: "Student number",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("universitystudentnumber")}
      </div>
    ),
  },
  {
    accessorKey: "universitycourse",
    header: "Course",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("universitycourse")}</div>
    ),
  },
  {
    accessorKey: "universityyear",
    header: "Year",
    cell: ({ row }) => (
      <div className="capitalize">
        {formatYear(row.getValue("universityyear"))}
      </div>
    ),
  },
  {
    accessorKey: "universitytype",
    header: "Membership type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("universitytype")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return <DropdownContainer />;
    },
  },
];

export const officeColumns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },

  {
    accessorKey: "officephonenumber",
    header: "Phone number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("officephonenumber")}</div>
    ),
  },

  {
    accessorKey: "joindate",
    header: "Join date",
    cell: ({ row }) => (
      <div className="capitalize">{formatDate(row.getValue("joindate"))}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return <DropdownContainer />;
    },
  },
];

export const communityColumns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },

  {
    accessorKey: "communityphonenumber",
    header: "Phone number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("communityphonenumber")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return <DropdownContainer />;
    },
  },
];
