import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Hidden,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          width: '100%',
          left: '0',
          bottom: '0',
          position: 'fixed',
          pb: '1px',
          pt: '1px'
        }}
      >
        <Divider />
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            position: 'relative',
            p: theme.spacing(0.25)

          }}
        >
          <Grid container spacing={0}>
            <Hidden mdDown>
              <Grid container item xs={12} md={4}>
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0
                  }}
                >
                  <ListItemButton component='a' href='#'>
                    <ListItemText
                      primary={
                        <Typography
                          variant='body2'
                          color={theme.palette.text.secondary}
                        >
                          Privacy Policy
                        </Typography>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton component='a' href='#'>
                    <ListItemText
                      primary={
                        <Typography
                          variant='body2'
                          color={theme.palette.text.secondary}
                        >
                          Terms of Use
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </List>
              </Grid>
            </Hidden>
            <Grid container item xs={12} md={4} justifyContent='center'>
              <List>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body2'
                        color={theme.palette.text.secondary}
                      >
                        Copyright &copy; {new Date().getFullYear()} Bobs Programming Academy.
                      </Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>

            <Grid container item xs={12} md={4} justifyContent='center'>
              <List>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body2'
                        color={theme.palette.text.secondary}
                      >
                        Photo by
                        {' '}
                        <Link
                          href='https://pixabay.com/users/marlyneart-15261801'
                          target='_blank'
                          rel='noreferrer'
                          sx={{
                            color: theme.palette.text.secondary
                          }}
                        >
                          Martine Auvray
                        </Link>
                        {' '}
                        on
                        {' '}
                        <Link
                          href='https://pixabay.com/photos/dog-containment-telework-bichon-4977599/'
                          target='_blank'
                          rel='noreferrer'
                          sx={{
                            color: theme.palette.text.secondary
                          }}
                        >
                          Pixabay
                        </Link>.
                      </Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Footer;