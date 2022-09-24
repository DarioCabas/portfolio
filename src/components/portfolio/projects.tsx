import React, { FC, useRef } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    name: 'CIDEO',
    description: 'Give a gift in form of a card that gives you a wonderful message from people that care for you',
    image: '',
    tags: [
      {
        name: 'React'
      },
      {
        name: 'Material UI'
      },
      {
        name: 'Javascript'
      },
      {
        name: 'Redux'
      },
      {
        name: 'Eslint'
      }
    ],
    link: 'https://www.youtube.com/embed/z07SlRkpfhM'
  },
  {
    name: 'AIG4U',
    description: 'This app permit to connect with all the team of a insurance, take a date, program, take notes',
    image: '',
    tags: [
      {
        name: 'React native'
      },
      {
        name: 'NativeBase'
      },
      {
        name: 'Javascript'
      },
      {
        name: 'Figma'
      }
    ],
    link: 'https://www.youtube.com/embed/GW5JHiH9dEM'
  },
  {
    name: 'Ten5',
    description: 'This app and web panel help people to stay connected thought messages without typing messages and control all the flow',
    image: '',
    tags: [
      {
        name: 'React native'
      },
      {
        name: 'Next.js'
      },
      {
        name: 'NativeBase'
      },
      {
        name: 'Figma'
      },
      {
        name: 'MUI'
      }
    ],
    link: 'https://video.wixstatic.com/video/f86269_2f23e4ff505f40ba961ac839e3ab6882/1080p/mp4/file.mp4'
  },

]

const Projects: FC = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div id='projects' >
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
        ref={ref}
      >
        <Box
          marginBottom={4}
          component={motion.div}
          initial={{
            scale: isInView ? 0 : 0
          }}
          animate={{
            scale: isInView ? 1 : 0
          }}
          transition={{
            duration: 0.5,
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
            Projects
          </Typography>
          <Typography
            variant='h6'
            color={theme.palette.text.secondary}
            align='center'
            marginTop={4}
            marginBottom={6}
          >
            View some of my latest projects
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projects.map((item, i) => (
            <Grid
              key={i}
              item
              xs={12}
              md={4}
            >
              <Box
                display='block'
                width={1}
                height={1}
                sx={{
                  transition: 'all .0s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`
                  }
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display='flex'
                  flexDirection='column'
                  variant='outlined'
                  sx={{ backgroundImage: 'none' }}
                >
                  <CardMedia
                    title={item.name}
                    sx={{
                      position: 'relative',
                      height: { xs: 240, sm: 340, md: 280 },
                      overflow: 'hidden',
                      '& .slick-slide img': {
                        objectFit: 'cover',
                      },
                      '& .slick-prev, & .slick-next': {
                        zIndex: 2,
                        top: 0,
                        bottom: '100%',
                        left: '100%',
                        right: 0,
                        transform: 'translate(-100%, 50%)',
                        marginLeft: theme.spacing(-2),
                        width: 32,
                        height: 32,
                        '&:before': {
                          fontSize: theme.spacing(3),
                        },
                      },
                      '& .slick-prev': {
                        marginLeft: theme.spacing(-6),
                      },
                      '& .lazy-load-image-background.lazy-load-image-loaded': {
                        display: 'flex !important',
                      },
                    }}
                  >
                    <Box
                      component={() =>
                        <iframe
                          width="100%"
                          height="100%"
                          src={item.link}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      }
                      height={{ xs: 240, sm: 340, md: 280 }}
                      width='100%'
                      sx={{ objectFit: 'cover', effect: 'blur' }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant='h6'
                      gutterBottom
                      align='left'
                      fontWeight={700}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant='subtitle2'
                      color={theme.palette.text.secondary}
                      align='left'
                    >
                      {item.description}
                    </Typography>
                    <Box
                      marginTop={2}
                      display='flex'
                      justifyContent='space-between'
                    >
                      <Box marginTop={2}>
                        {item.tags.map((tag, i) => (
                          <Chip
                            key={i}
                            label={tag.name}
                            variant='outlined'
                            sx={{ m: 1 }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                  <Box flexGrow={1} />
                  {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button
                      component='a'
                      href={item.link}
                      target='_blank'
                      sx={{ textTransform: 'none' }}
                    >
                      Source Code
                    </Button>
                  </CardActions> */}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};

export default Projects;