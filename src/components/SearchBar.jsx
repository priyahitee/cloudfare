import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate  = useNavigate();

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`) 
            setSearchTerm('');
        }
    };

    return(
        <Paper 
        component='form'
        onSubmit={onHandleSubmit}
        sx={{ borderRadius:20, border: '1px solid #e3e3e3', pl:2, boxShadow: 'none' }}
        >
            <input type="text" 
            style={{border:0, outline:0}}
            className="search-bar"
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
            placeholder="Search..." />
            <IconButton type='submit' sx={{p:"10px", color:'red'}} aria-label='search'>
                <Search/>
            </IconButton>
    
        </Paper>
      )
};
   
export default SearchBar;