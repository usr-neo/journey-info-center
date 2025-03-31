
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface VisaType {
  name: string;
  processingTime: string;
  validity: string;
  entries: string;
  fees: string;
}

interface VisaTypesTableProps {
  visaTypes: VisaType[];
}

const VisaTypesTable: React.FC<VisaTypesTableProps> = ({ visaTypes }) => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Visa Type</TableHead>
            <TableHead>Processing Time</TableHead>
            <TableHead>Validity</TableHead>
            <TableHead>Entries</TableHead>
            <TableHead>Fees</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visaTypes.map((visaType) => (
            <TableRow key={visaType.name}>
              <TableCell className="font-medium">{visaType.name}</TableCell>
              <TableCell>{visaType.processingTime}</TableCell>
              <TableCell>{visaType.validity}</TableCell>
              <TableCell>{visaType.entries}</TableCell>
              <TableCell>{visaType.fees}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VisaTypesTable;
