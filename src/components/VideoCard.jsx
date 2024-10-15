import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video: { id: { videoId }, snippet } }) => {
  return (
   <Card sx={{ width: { xs: '330px',sm:'300px'}, boxShadow: "none", borderRadius: 0}}>
    <Link to={videoId ? `video/${videoId}`: `${demoVideoUrl}`}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet.title}  
        sx={{ width: { xs:'330px', sm:"300px"} , height: 180 }}  />
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: '70px' }}>
            <Link to={videoId ? `video/${videoId}`: `${demoVideoUrl}`}>
                <Typography variant="subtitle2" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 30) || demoVideoTitle.slice(0, 30)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet.channelId}`: demoChannelUrl}>
            <Typography variant="body1" color="gray" fontSize='14px'>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Typography> 
            </Link>
        </CardContent>
        
    </Link>
   </Card>
    
  )
}

export default VideoCard