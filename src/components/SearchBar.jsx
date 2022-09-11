import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchBar = ({ submitSearch }) => {
  const [location, setLocation] = useState('');

  const onSubmit = e => {
      e.preventDefault();
      if (!location || location === '') return;
      submitSearch(location);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className='search-bar'>
    <AppBar position="static" className='search-bar-child'>
      <Toolbar className='toolbar'>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Enter a city"
            inputProps={{ 'aria-label': 'search' }}
            aria-label="location"
            type="text"
            className="form-control"
            required
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && submitSearch(location)}
            autoFocus
          />
        </Search>
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          type="submit"
          onClick={onSubmit}
          id="searchBtn"
        >
          SEARCH
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
  );
};

export default SearchBar;
