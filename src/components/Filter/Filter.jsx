import { React } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleSearch = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <Box>
      <TextField
        label="Find contact by Name"
        type="text"
        name="search"
        value={filter}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  );
};

export default Filter;
