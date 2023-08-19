// Import necessary components and dependencies
import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

// Design component
export default function Design() {
  // State to manage checkboxes and child visibility
  const [checked, setChecked] = React.useState([false, false, false]);
  const [showChildren, setShowChildren] = React.useState(true);

  // Handler for changing the parent checkbox
  const handleParentChange = () => {
    const newChecked = !checked.every(Boolean);
    setChecked([newChecked, newChecked, newChecked]);
  };

  // Handler for changing individual child checkboxes
  const handleChildChange = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  // Handler for clicking the horizontal rule
  const handleLineClick = () => {
    setShowChildren(!showChildren);
  };

  // Child component (conditionally rendered)
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {showChildren && (
        <>
          {/* Checkbox for graphic design */}
          <FormControlLabel
            label="graphic_design"
            control={
              <Checkbox
                checked={checked[0]}
                onChange={() => handleChildChange(0)}
              />
            }
          />

          {/* Checkbox for product design */}
          <FormControlLabel
            label="product_design"
            control={
              <Checkbox
                checked={checked[1]}
                onChange={() => handleChildChange(1)}
              />
            }
          />

          {/* Checkbox for web design */}
          <FormControlLabel
            label="web_design"
            control={
              <Checkbox
                checked={checked[2]}
                onChange={() => handleChildChange(2)}
              />
            }
          />
        </>
      )}
    </Box>
  );

  // Render the Design component
  return (
    <div style={{ margin: 20, marginTop: 10 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <HorizontalRuleIcon
          sx={{ cursor: 'pointer' }}
          onClick={handleLineClick}
        />
        <FormControlLabel
          label="design"
          control={
            <Checkbox
              checked={checked.every(Boolean)}
              indeterminate={!checked.every(Boolean) && checked.some(Boolean)}
              onChange={handleParentChange}
            />
          }
        />
      </Box>
      {children}
    </div>
  );
}
