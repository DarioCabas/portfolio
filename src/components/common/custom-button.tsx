import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

interface PropsButtonCustom {
  href: string,
  icon: string,
  text: string,
}

const CustomButton: FC<PropsButtonCustom> = (props) => {
  const { href, icon, text } = props;
  const theme = useTheme();

  return (
    <Button
      component='a'
      color='primary'
      href={href}
      size='small'
      variant='text'
      sx={{
        color: theme.palette.mode === 'dark'
          ? theme.palette.text.secondary
          : theme.palette.text.primary,
        fontSize: theme.typography.subtitle1,
        fontWeight: 'medium',
        textTransform: 'uppercase',
        mr: 2,
        '&:active': {
          color: theme.palette.mode === 'dark'
            ? theme.palette.primary.contrastText
            : theme.palette.primary.main,
        },
        '&:hover': {
          color: theme.palette.mode === 'dark'
            ? theme.palette.primary.contrastText
            : theme.palette.primary.main,
        },
        '& svg': {
          mr: 0.5
        },
      }}
    >
      {icon} {text}
    </Button>
  );
};

export default CustomButton;