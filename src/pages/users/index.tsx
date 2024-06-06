import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UsersTable from "./components/UsersTable";

import { DataTable } from "@/components/data-table";

import { User, columns } from "./column";

// const getUsers: User[] = () => {
//   return [
//     {
//       id: "string",
//       name: "string",
//       email: "string",
//       image: "string",
//       lastSeend: "string",
//     },
//   ];
// };

const getUsers = (): User[] => {
  return [
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "1",
      name: "string",
      email: "string",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "2",
      name: "string",
      email: "ctring",
      image: "string",
      lastSeend: "string",
    },
    {
      id: "3",
      name: "string",
      email: "btring",
      image: "string",
      lastSeend: "string",
    },

    {
      id: "3",
      name: "string",
      email: "atring",
      image: "string",
      lastSeend: "string",
    },
  ];
};

export default function Users() {
  const data = getUsers();
  return (
    // <Card className="shadow-md border-none">
    //   <CardHeader>
    //     <CardTitle>Users List</CardTitle>
    //     <CardDescription>you can show all users in the systeam</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <UsersTable />
    //   </CardContent>
    //   <CardFooter>
    //     <p>Finish</p>
    //   </CardFooter>
    // </Card>
    <Card className="shadow-md border-none m-4">
      <CardHeader>
        <h1 className="text-3xl font-bold">All Users</h1>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
