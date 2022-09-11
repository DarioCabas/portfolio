import React, { FC } from 'react';
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

const about = [
  {
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    title: 'Design',
    description: 'I create beautiful and modern designs optimized for multiple color(light and dark theme)'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Design',
    description: 'I develop responsive, scalable  and fast applications using the best standards and programming practices'
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 40 }} />,
    title: 'Design',
    description: 'Once the application is ready, I help you launch it and teach you how edit, update and maintain it '
  }
]

const About: FC = () => {
  const theme = useTheme();
  return (
    <div id='about'>
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
              About me
            </Typography>
            <Typography
              variant='h6'
              color={theme.palette.text.secondary}
              align='center'
              data-aos='fade-up'
              marginTop={4}
              marginBottom={6}
            >
              I help software developers and people learn new skills, gain more experience and create excellent applications. In the same way I learn of them
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {about.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <ListItem
                  component='div'
                  disableGutters
                  sx={{
                    alignItems: 'flex-start',
                    padding: 0,
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
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default About;