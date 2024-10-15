import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Videos, ChannelCard } from './';
import { Box } from "@mui/material";
import { fetchAPI } from '../utils/fetchAPI';

const ChannelDetails = () => {

  const[channelDetail, setChannelDetail] = useState(null);
  const[videos, setVideos] = useState([]);

  const { id } = useParams();
  console.log(channelDetail)

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then(data => setChannelDetail(data?.items[0]));

    fetchAPI(`search?channelId=${id} &part=snippet&order=date`).then(data => setVideos(data?.items));
  },[id]);

  return (
    <Box minHeight='95vh'>
        <Box>
        <div style={{
            height:'300px',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 89%)',
            zIndex: 10,
          }} />
            <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        </Box>
        <Box p={2} display="flex">
            <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default ChannelDetails;