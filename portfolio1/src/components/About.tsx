import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function About() {
    return (
        <>
            <Box p={2}>
                <Box display='flex' justifyContent='center' p={1}>
                    <Typography variant='h5' style={{textDecoration:"underline"}} color={'GrayText'}>
                        About
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <Typography variant='body1' align='left' color={'GrayText'} lineHeight={2}>
                        横山大希と申します。<br />
                        栃木県に住んでいて、東京まで通勤していました。<br />
                        好きな言語はHTMLとTypeScriptです。<br />
                        パソコンはWindows派です。
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default About;