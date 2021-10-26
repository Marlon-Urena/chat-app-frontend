import { ReactNode } from 'react';
// material
import { alpha, styled, Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

// ----------------------------------------------------------------------

interface RootStyleProps {
  theme: Theme;
  styleprops: { color: Color; variant: Variant };
}

type ExcludeDefaultColor<T> = Exclude<T, 'default'>;
const RootStyle = styled('span')(({ theme, styleprops }: RootStyleProps) => {
  const { color, variant } = styleprops;

  const styleFilled = (paletteColor: ExcludeDefaultColor<Color>) => ({
    color: theme.palette[paletteColor].contrastText,
    backgroundColor: theme.palette[paletteColor].main
  });

  const styleOutlined = (paletteColor: ExcludeDefaultColor<Color>) => ({
    color: theme.palette[paletteColor].main,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette[paletteColor].main}`
  });

  const styleGhost = (paletteColor: ExcludeDefaultColor<Color>) => ({
    color: theme.palette[paletteColor].dark,
    backgroundColor: alpha(theme.palette[paletteColor].main, 0.16)
  });

  return {
    height: 22,
    minWidth: 22,
    lineHeight: 0,
    borderRadius: 8,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,

    ...(color !== 'default'
      ? {
          ...(variant === 'filled' && { ...styleFilled(color) }),
          ...(variant === 'outlined' && { ...styleOutlined(color) }),
          ...(variant === 'ghost' && { ...styleGhost(color) })
        }
      : {
          ...(variant === 'outlined' && {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            border: `1px solid ${alpha(theme?.palette.grey[500], 0.32)}`
          }),
          ...(variant === 'ghost' && {
            color: theme.palette.text.secondary,
            backgroundColor: alpha(theme?.palette.grey[500], 0.16)
          })
        })
  };
});

// ----------------------------------------------------------------------

type Variant = 'filled' | 'outlined' | 'ghost';
type Color = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

interface LabelProps {
  children?: ReactNode;
  color: Color;
  variant?: Variant;
  sx?: SxProps<Theme>;
}

export default function Label({
  color = 'default',
  variant = 'ghost',
  children,
  ...other
}: LabelProps) {
  const theme = useTheme();
  return (
    <RootStyle theme={theme} styleprops={{ color, variant }} {...other}>
      {children}
    </RootStyle>
  );
}
