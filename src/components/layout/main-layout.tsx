import React from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Fab,
  NoSsr,
  Zoom,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import MainNavbar from './main-navbar';
import Footer from './footer';
import MainSidebar from './main-sidebar';

interface MainLayoutProps {
  children?: ReactNode;
}

const Layout: FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isLg = useMediaQuery(
    theme.breakpoints.up('lg'),
    { defaultMatches: true }
  );

  const [openSidebar, setOpenSidebar] = React.useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isLg ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollTo = (id: string) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`) as HTMLElement | null;
      if (!element) {
        return;
      }
      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  return (
    <Box id='page-top'>
      <MainNavbar onSidebarOpen={handleSidebarOpen} />
      <MainSidebar
        onClose={handleSidebarClose}
        open={open}
      />
      <Box>
        {children}
      </Box>
      <Footer />
      <NoSsr>
        <Zoom in={trigger}>
          <Box
            onClick={() => scrollTo('page-top')}
            role='presentation'
            sx={{ position: 'fixed', bottom: 24, right: 32 }}
          >
            <Fab
              color='primary'
              size='small'
              aria-label='scroll back to top'
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: theme.palette.primary.main,
                  border: '2px solid' + theme.palette.primary.main,
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Zoom>
      </NoSsr>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
