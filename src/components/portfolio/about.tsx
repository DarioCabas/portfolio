import React, { FC, useRef, useMemo } from 'react';
import {
  Box,
  Divider,
  Grid,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'

import { useTheme } from '@mui/material/styles';
import PaletteIcon from '@mui/icons-material/Palette';
import SettingsIcon from '@mui/icons-material/Settings';
import CodeIcon from '@mui/icons-material/Code';
import { motion, useInView } from 'framer-motion';

const about = [
  {
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    title: 'Design',
    description: 'I create beautiful and modern designs optimized for multiple colors (light and dark themes)'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Development',
    description: 'I develop responsive, scalable, and fast applications using the best standards and programming practices'
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 40 }} />,
    title: 'Launch & Maintenance',
    description: 'Once the application is ready, I help you launch it and teach you how to edit, update and maintain it.'
  }
]

const About: FC = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div id='about'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box ref={ref}>
          <Box
            marginBottom={4}
            component={motion.div}
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              type: 'spring'
            }}
          >
            <Typography
              variant='h3'
              align='center'
              fontWeight={700}
              marginTop={theme.spacing(1)}
              gutterBottom
            >
              About me
            </Typography>
            <Typography
              variant='h6'
              color={theme.palette.text.secondary}
              align='center'
              marginTop={4}
              marginBottom={6}
            >
              I help software developers and people learn new skills, gain more experience and create excellent applications. In the same way I learn of them
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {

              about.map((item, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <ListItem
                    component={motion.div}
                    disableGutters
                    sx={{
                      alignItems: 'flex-start',
                      padding: 0,
                    }}
                    initial={{
                      scale: 0.5
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <ListItemAvatar
                    >
                      {item.icon}
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={item.description}
                      primaryTypographyProps={{
                        variant: 'h4',
                        gutterBottom: true,
                        sx: { fontWeight: 700 },
                      }}
                      secondaryTypographyProps={{
                        variant: 'subtitle1',
                        gutterBottom: true,
                      }}
                      sx={{
                        margin: 0,
                      }}
                    />
                  </ListItem>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default About;