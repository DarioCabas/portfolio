import React, { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  Avatar,
  Box,
  Container,
  Divider,
  Typography
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeroButtons from 'src/components/common/hero-buttons';
import { ComponentParticles } from '../common/particles';

const HomeHero: FC = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(
    theme.breakpoints.up('md'),
    { defaultMatches: true }
  );
  return (
    <div id='home'>
      <Box sx={{ width: 1, height: 1 }}>
        <Container
          sx={{
            maxWidth: '100%',
          }}
        >
          <Box
            display='flex'
            flexDirection={{ xs: 'column', md: 'row' }}
            position='relative'
            minHeight={{ md: 600 }}
          >
            <Box
              width={1}
              order={{ xs: 2, md: 1 }}
              display='flex'
              alignItems='center'
            >
              <Container>
                <Box
                  data-aos={isMd ? 'fade-right' : 'fade-up'}
                >
                  <Box marginBottom={2}>
                    <Typography
                      color={theme.palette.text.primary}
                      variant='h2'
                      fontWeight={700}
                      align='center'
                    >
                      Hi I&apos;m
                      {' '}
                    </Typography>
                    <Typography
                      color={theme.palette.primary.main}
                      variant='h2'
                      fontWeight={700}
                      align='center'
                      marginBottom={3}
                    >
                      Dario Cabascango
                    </Typography>
                  </Box>
                  <Box marginBottom={3}>
                    <Typography
                      variant='h6'
                      component='p'
                      color={theme.palette.text.secondary}
                      align='justify'
                    >
                      Developer, tech enthusiast and with creative skills, interested in developing implementable technology to solve challenging tasks. I use React to make mobile and web apps thinking in the user
                    </Typography>
                  </Box>
                  <HeroButtons />
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                flex: { xs: '0 0 100%', md: '0 0 50%' },
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                order: { xs: 1, md: 2 },
              }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50vw' },
                  height: '100%',
                  position: 'relative'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Avatar
                    src="/static/front/front.jpg"
                    alt="front"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: isMd ? 300 : 150,
                      height: isMd ? 300 : 150
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <Divider sx={{ mt: 3 }} />
      </Box>
    </div>
  );
};

export default HomeHero;