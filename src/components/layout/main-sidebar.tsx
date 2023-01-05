import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import DevicesIcon from '@mui/icons-material/Devices';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GridViewIcon from '@mui/icons-material/GridView';
// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAtom} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faAtom);

import CustomButton from 'src/components/common/custom-button';
import AccessibilityNew from '@mui/icons-material/AccessibilityNew';

interface MainSidebarProps {
  onClose?: () => void;
  open?: boolean;
}


const MainSidebar: FC<MainSidebarProps> = (props) => {
  const { onClose, open } = props;
  const theme = useTheme();

  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        onClose={onClose}
        open={open}
        variant='temporary'
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 280
          },
        }}
      >
        <Box sx={{ height: '100%', padding: 1 }}>
          <Box width={1} paddingX={0} paddingY={1}>
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
                    fontFamily: '"Love Ya Like A Sister", cursive',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: theme.palette.text.primary
                  }}
                  flexGrow={1}
                >
                  AyaumaDev
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box paddingX={2} paddingY={2}>
            <CustomButton
              href='#home'
              icon={<HomeIcon />}
              text='Home'
            />
            <Box paddingY={1}>
              <CustomButton
                href='#about'
                icon={<AccessibilityNew />}
                text='About'
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#projects'
                icon={<GridViewIcon />}
                text='Projects'
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#technologies'
                icon={<DevicesIcon />}
                text='Technologies'
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#contact'
                icon={<EmailIcon />}
                text='CONTACT'
              />
            </Box>
            <Box>
              <Stack direction='row' spacing={1}>
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
              </Stack>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

MainSidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default MainSidebar;