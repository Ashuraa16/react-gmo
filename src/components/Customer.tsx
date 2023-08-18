import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function Customer() {
  const [checked, setChecked] = React.useState([true, false]);
  const [showChildren, setShowChildren] = React.useState(true);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const handleLineClick = () => {
    setShowChildren(!showChildren);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {showChildren && (
        <>
          <FormControlLabel
            label="support"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="customer_service"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
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
          label="customer_service"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
      </Box>
      {children}
    </div>
  );
}
