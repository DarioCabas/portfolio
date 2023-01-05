import React, { FC } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Avatar,
  Button,
  Box,
  Divider,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DevicesIcon from '@mui/icons-material/DevicesOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GridViewIcon from '@mui/icons-material/GridView';
import InstagramIcon from '@mui/icons-material/Instagram';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faAtom);
import ColorModeContext from 'src/components/color-mode-context';
import CustomButton from 'src/components/common/custom-button';
import { motion } from 'framer-motion';

interface MainNavbarProps {
  onSidebarOpen?: () => void;
}

const MainNavbar: FC<MainNavbarProps> = (props) => {
  const { onSidebarOpen } = props;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <React.Fragment>
      <AppBar
        position='sticky'
        color='transparent'
        elevation={theme.palette.mode === 'dark' ? (0) : (trigger ? 1 : 0)}
        sx={{
          top: 0,
          border: 0,
          backgroundColor: trigger ? theme.palette.background.default : 'transparent',
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <Box
            alignItems='center'
            sx={{ display: { md: 'block', lg: 'none' } }}
          >
            <Button
              onClick={onSidebarOpen}
              aria-label='Menu'
              variant='outlined'
              sx={{
                borderRadius: 2,
                minWidth: 'auto',
                padding: 1,
                color: theme.palette.primary.main,
                borderColor: alpha(theme.palette.primary.main, 0.2),
              }}
            >
              <MenuIcon fontSize='medium' />
            </Button>
          </Box>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <IconButton size='large' disabled>
              <Avatar
              >
                <FontAwesomeIcon
                  icon={faAtom}
                  style={{
                    color: theme.palette.common.white,
                    height: 20,
                    width: 20
                  }}
                />
              </Avatar>
              <Typography
                variant='h3'
                component='div'
                sx={{
                  flexGrow: 1,
                  color: theme.palette.text.primary,
                  fontFamily: '"Love Ya Like A Sister", cursive',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: { md: 'inline', xs: 'none' }
                }}
              >
                Ayaumadev
              </Typography>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              alignItems: 'center',
              display: { lg: 'flex', md: 'none', xs: 'none' }
            }}
          >
            <CustomButton
              href='#home'
              icon={<HomeIcon />}
              text='Home'
            />
            <CustomButton
              href='#about'
              icon={<AccessibilityNewIcon />}
              text='About'
            />
            <CustomButton
              href='#projects'
              icon={<GridViewIcon />}
              text='Projects'
            />
            <CustomButton
              href='#technologies'
              icon={<DevicesIcon />}
              text='Technologies'
            />
            <CustomButton
              href='#contact'
              icon={<EmailIcon />}
              text='Contact'
            />
          </Box>
          <Divider
            orientation='vertical'
            sx={{
              height: 32,
              mx: 2,
              display: { lg: 'flex', md: 'none', xs: 'none' }
            }}
          />
          <Box sx={{ display: 'flex' }}>
            <IconButton
              onClick={colorMode.toggleColorMode}
              aria-label='Theme Mode'
              color={theme.palette.mode === 'dark' ? 'warning' : 'inherit'}
            >
              {theme.palette.mode === 'dark'
                ? (
                  <LightModeIcon fontSize='medium' />
                )
                : (
                  <DarkModeIcon fontSize='medium' />
                )
              }
            </IconButton>
          </Box>
          <Divider
            orientation='vertical'
            sx={{
              height: 32,
              mx: 2,
              display: { lg: 'flex', md: 'none', xs: 'none' }
            }}
          />
          <Box sx={{ display: { lg: 'flex', md: 'none', xs: 'none' } }}>
            <IconButton
              aria-label='YouTube'
              color='primary'
              href='https://www.youtube.com/channel/UCh_p3UkcmtjVZqxrsbP_lvQ/featured'
              target='_blank'
            >
              <YouTubeIcon fontSize='large' />
            </IconButton>
            <IconButton
              aria-label='LinkedIn'
              color='primary'
              href='https://www.linkedin.com/in/dario-cabascango-9724431a3/'
              target='_blank'
            >
              <LinkedInIcon fontSize='large' />
            </IconButton>
            <IconButton
              aria-label='Instagram'
              color='primary'
              href='#'
              target='_blank'
            >
              <InstagramIcon fontSize='large' />
            </IconButton>
          </Box>
          {theme.palette.mode === 'dark' && <Divider />}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

MainNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default MainNavbar;