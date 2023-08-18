import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function Design() {
  const [checked, setChecked] = React.useState([false, false, false]);
  const [showChildren, setShowChildren] = React.useState(true);

  const handleParentChange = () => {
    const newChecked = !checked.every(Boolean);
    setChecked([newChecked, newChecked, newChecked]);
  };

  const handleChildChange = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const handleLineClick = () => {
    setShowChildren(!showChildren);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {showChildren && (
        <>
          <FormControlLabel
            label="graphic_design"
            control={<Checkbox checked={checked[0]} onChange={() => handleChildChange(0)} />}
          />
          <FormControlLabel
            label="product_design"
            control={<Checkbox checked={checked[1]} onChange={() => handleChildChange(1)} />}
          />
          <FormControlLabel
            label="web_design"
            control={<Checkbox checked={checked[2]} onChange={() => handleChildChange(2)} />}
          />
        </>
      )}
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <HorizontalRuleIcon sx={{ cursor: 'pointer' }} onClick={handleLineClick} />
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
