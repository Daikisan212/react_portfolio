import React from 'react';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

//写真をインポートする
import ImageFIle from '../static/images/20230618_124430.jpg';

function MyAvatar() {
    return (
        <>
            <Box p={2}>
                <Box display='flex' justifyContent='center' p={1} >
                    <Avatar
                        alt='Cat'
                        src={ImageFIle}
                        sx={{width:300, height: 300}}
                    />
                </Box>
                <Box display='flex' justifyContent='center' p={1} >
                    <Typography variant='h5' >
                        DAIKI YOKOYAMA (↑うちの猫です)
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1} >
                    <Typography variant='body1'>
                        Web Enginner
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default MyAvatar;