import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UserPreviewer from "@/components/application/UserPreviewer";
export default function UsersTable() {
  return (
    <Table>
      <TableCaption>A list of your recent users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#Id</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Issued Date</TableHead>
          <TableHead>Balance</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">User-8782</TableCell>
          <TableCell>
            <Badge>success</Badge>
          </TableCell>
          <TableCell>
            <UserPreviewer
              name="Ali Hamid"
              description="software developer"
              src="https://github.com/shadcn.png"
            />
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">User-8s78</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>
            <UserPreviewer
              name="Ali Hamid"
              description="software developer"
              src="https://github.com/shadcn.png"
            />
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">User-8782</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>
            <UserPreviewer
              name="Ali Hamid"
              description="software developer"
              src="https://github.com/shadcn.png"
            />
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">User-7782</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>
            <UserPreviewer
              name="Ali Hamid"
              description="software developer"
              src="https://github.com/shadcn.png"
            />
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">User-8782</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>
            <UserPreviewer
              name="Ali Hamid"
              description="software developer"
              src="https://github.com/shadcn.png"
            />
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">User-8782</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>
            <UserPreviewer
              name="Ali Hamid"
              description="software developer"
              src="https://github.com/shadcn.png"
            />
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
