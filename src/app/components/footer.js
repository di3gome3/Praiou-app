import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";


export default function Footer() {

    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography sx={{ textAlign: 'center', color: '#374357' }}>
                        Feito com ♡ por Diego Menezes
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', mt: '10px', mb: '10px' }}>
                        <Link href={'https://github.com/di3gome3'} target="_blank">
                            <GitHubIcon sx={{ color: '#374357' }} />
                        </Link>

                        <Link href={'https://www.instagram.com/di3go_me3/'} target="_blank">
                            <InstagramIcon sx={{ color: '#374357' }} />
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}