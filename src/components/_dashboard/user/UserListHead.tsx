import { ChangeEvent, MouseEvent } from 'react';
// material
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { TableHead as TableHeader } from '../../../pages/User';
import { UserType } from '../../../_mocks_/user';

// ----------------------------------------------------------------------

interface UserListHeadProps {
  order: 'asc' | 'desc';
  orderBy: keyof UserType;
  rowCount: number;
  headLabel: TableHeader[];
  numSelected: number;
  onRequestSort: (event: MouseEvent<HTMLSpanElement>, property: keyof UserType) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function UserListHead({
  order,
  orderBy,
  rowCount,
  headLabel,
  numSelected,
  onRequestSort,
  onSelectAllClick
}: UserListHeadProps) {
  const createSortHandler = (property: keyof UserType) => (event: MouseEvent<HTMLSpanElement>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
