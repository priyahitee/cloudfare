import React from 'react'
import {categories} from '../utils/constants';
import { Stack } from "@mui/material";

const SideBar = ({selectedCategory, setSelectedCategory}) => (
  <Stack direction='row' sx={{ flexDirection:{md: 'column'} ,overflowY: 'auto', height:{sx:'auto', md:'91%'}}}>
      {categories.map((category ) => (
        <button className='category-btn' 
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
        style={{
          background: category.name === selectedCategory && '#fc1503', 
          color:'#fff'}}>
          <span style={{
            color:category.name === selectedCategory ? 'white' : 'red', marginRight: "15px"}}>{category.icon}</span>
          <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
        </button>
      ))}
  </Stack>
)

export default SideBar