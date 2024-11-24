import * as React from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "../components/ui/table";

interface TableWrapperProps {
    headers: string[];
    data: Array<Array<React.ReactNode>>;
    caption?: string;
    footerContent?: React.ReactNode;
    className?: string;
}

const TableWrapper: React.FC<TableWrapperProps> = ({
                                                       headers,
                                                       data,
                                                       caption,
                                                       footerContent,
                                                       className,
                                                   }) => {
    return (
        <Table className={className}>
            {caption && <TableCaption>{caption}</TableCaption>}
            <TableHeader>
                <TableRow>
                    {headers.map((header, index) => (
                        <TableHead key={index}>{header}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <TableCell key={cellIndex}>{cell}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
            {footerContent && (
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={headers.length}>{footerContent}</TableCell>
                    </TableRow>
                </TableFooter>
            )}
        </Table>
    );
};

export default TableWrapper;
