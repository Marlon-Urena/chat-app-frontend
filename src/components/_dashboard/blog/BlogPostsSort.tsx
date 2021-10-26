// material
import { MenuItem, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

// ----------------------------------------------------------------------

interface BlogPostsSortProps {
  options?: { value: string; label: string }[];
  onSort?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function BlogPostsSort({ options, onSort }: BlogPostsSortProps) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
