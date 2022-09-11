import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/LocationOn';
import { useTheme } from '@mui/material/styles';

const contact = [
  {
    email: 'hz-hertzio@hotmail.com',
    address: 'Quito-Ecuador',
    latitude: -0.1763428,
    longitude: -78.4657569
  }
]

const Contact: FC = () => {
  const theme = useTheme();

  const Map = React.useMemo(() => dynamic(
    () => import('src/components/common/map'),
    {
      loading: () => <p>A map is loading...</p>,
      ssr: false
    }
  ), []);

  return (
    <div id='contact'>
      <Box
        position='relative'
        marginBottom={0}
      >
        <Box
          maxWidth={{ sm: 720, md: 1236 }}
          width={1}
          margin='0 auto'
          paddingX={2}
          paddingY={{ xs: 4, sm: 6, md: 8 }}
          paddingBottom={0}
        >
          <Box marginBottom={0}>
            <Typography
              variant='h3'
              align='center'
              fontWeight={700}
              marginTop={theme.spacing(1)}
              data-aos='fade-up'
              gutterBottom
            >
              Get in touch
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.secondary}
              data-aos='fade-up'
              marginTop={4}
              marginBottom={6}
            >
              I would love to hear from you
            </Typography>
          </Box>
          {contact.map((item, i) => (
            <Box key={i}>
              <Box
                display='flex'
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent='center'
                marginTop={0}
                marginBottom={3}
              >
                <Box
                  component={ListItem}
                  disableGutters
                  width='auto'
                  padding={0}
                  marginRight={10}
                >
                  <Box
                    component={ListItemAvatar}
                    minWidth='auto !important'
                    marginRight={2}
                  >
                    <Box
                      component={Avatar}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        width: 40,
                        height: 40
                      }}
                    >
                      <EmailIcon fontSize='small' />
                    </Box>
                  </Box>
                  <ListItemText
                    primary='Email'
                    secondary={item.email}
                  />
                </Box>
                <Box
                  component={ListItem}
                  disableGutters
                  width='auto'
                  padding={0}
                >
                  <Box
                    component={ListItemAvatar}
                    minWidth='auto !important'
                    marginRight={2}
                  >
                    <Box
                      component={Avatar}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <LocationIcon fontSize='small' />
                    </Box>
                  </Box>
                  <ListItemText
                    primary='Location'
                    secondary={item.address}
                  />
                </Box>
              </Box>
              <Box>
                <Map
                  coordinates={[item.latitude, item.longitude]}
                  zoom={13}
                />
              </Box>
              
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Contact;