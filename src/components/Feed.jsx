import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import {SideBar, Videos} from '../components';
import { fetchAPI } from "../utils/fetchAPI";



const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
      fetchAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md: "99vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex:2}}>
        <Typography variant="h5" fontWeight="400" mb={2} sx={{ color: "white" }}>
         {selectedCategory} <span style={{ color: "#FC1503" }}>
             Videos
          </span> 
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed