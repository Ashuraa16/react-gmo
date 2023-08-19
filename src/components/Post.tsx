import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// Column definitions for the data grid
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'userId',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'title',
    width: 400,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 800,
    editable: true,
  },
];

// Interface for each item in the data array
interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Props interface for the Second component
interface SecondProps {
  data: Item[] | null;
}

// Main component for displaying the data grid
const Post: React.FC<SecondProps> = ({ data }) => {
  const rows = data || [];

  // Render the data grid
  return (
    <div>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Post;
