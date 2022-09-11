import React, { FC } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const technologies = [
    {
        name: 'Javascript',
        icon: '/static/images-portfolio/javascript.svg',
        alt: 'Javascript'
    },
    {
        name: 'Typescript',
        icon: '/static/images-portfolio/typescript.svg',
        atl: 'Typescript'
    },
    {
        name: 'Next.js',
        icon: '/static/images-portfolio/next-js.svg',
        atl: 'Next.js'
    },
    {
        name: 'Gatsby',
        icon: '/static/images-portfolio/gatsby.svg',
        atl: 'Gatsby'
    },
    {
        name: 'MUI',
        icon: '/static/images-portfolio/material-ui-1.svg',
        atl: 'TMaterial UI'
    },
    {
        name: 'React JS',
        icon: '/static/images-portfolio/react-2.svg',
        atl: 'React js'
    },
    {
        name: 'React Native',
        icon: '/static/images-portfolio/react-native-1.svg',
        atl: 'React Native'
    },
    {
        name: 'Redux',
        icon: '/static/images-portfolio/redux.svg',
        atl: 'Redux'
    },
    {
        name: 'Vscode',
        icon: '/static/images-portfolio/visual-studio-code-1.svg',
        atl: 'Visual studio code'
    },
    {
        name: 'Python',
        icon: '/static/images-portfolio/python-5.svg',
        atl: 'Python'
    },
    {
        name: 'NativeBase',
        icon: '/static/images-portfolio/nativebaselogo.svg',
        atl: 'NativeBase'
    },
    {
        name: 'Github',
        icon: '/static/images-portfolio/github-icon-1.svg',
        atl: 'Github'
    },
];

const Technologies:FC = () => {
    const theme = useTheme();

    return (
        <div id='technologies'>
            <Box
                maxWidth={{ sm: 720, md: 1236 }}
                width={1}
                margin='0 auto'
                paddingX={2}
                paddingY={{ xs: 4, sm: 6, md: 8 }}
            >
                <Box>
                    <Box marginBottom={4}>
                        <Typography
                            variant='h3'
                            align='center'
                            fontWeight={700}
                            marginTop={theme.spacing(1)}
                            data-aos='fade-up'
                            gutterBottom
                        >
                            Technologies
                        </Typography>
                        <Typography
                            variant='h6'
                            align='center'
                            color={theme.palette.text.secondary}
                            data-aos='fade-up'
                            marginTop={4}
                            marginBottom={6}
                        >
                            Technologies I use to build my products
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        {technologies.map((item, i) => (
                            <Grid item xs={12} md={3} key={i}>
                                <Box
                                    width={1}
                                    height={1}
                                    data-aos='fade-up'
                                    component={Card}
                                    display='flex'
                                    flexDirection='column'
                                    alignItems='center'
                                    boxShadow={0}
                                    variant='outlined'
                                    borderRadius={2}
                                >
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            transition: 'all .0s ease-in-out',
                                            '&:hover': {
                                                transform: `translateY(-${theme.spacing(1)})`,
                                            },
                                        }}
                                    >
                                        <Box marginBottom={1}>
                                            <Box
                                                component={Avatar}
                                                variant='rounded'
                                                sx={{
                                                    backgroundColor: 'transparent',
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: 2,
                                                    marginBottom: 2
                                                }}
                                            >
                                                <Image alt={item.alt} src={item.icon} height={50} width={50} />
                                            </Box>
                                        </Box>
                                        <Typography
                                            align='center'
                                            color={theme.palette.text.primary}
                                            fontWeight='bold'
                                        >
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Divider />
        </div>
    );
};

export default Technologies;