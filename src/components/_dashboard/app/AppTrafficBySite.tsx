import faker from 'faker';
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// material

// utils
import { Box, Card, CardContent, CardHeader, Grid, Paper, Typography } from '@mui/material';
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

type Social = {
  name: string;
  value: number;
  icon: JSX.Element;
};

const SOCIALS: Social[] = [
  {
    name: 'FaceBook',
    value: faker.datatype.number(),
    icon: <Icon icon={facebookFill} color="#1877F2" width={32} height={32} />
  },
  {
    name: 'Google',
    value: faker.datatype.number(),
    icon: <Icon icon={googleFill} color="#DF3E30" width={32} height={32} />
  },
  {
    name: 'Linkedin',
    value: faker.datatype.number(),
    icon: <Icon icon={linkedinFill} color="#006097" width={32} height={32} />
  },
  {
    name: 'Twitter',
    value: faker.datatype.number(),
    icon: <Icon icon={twitterFill} color="#1C9CEA" width={32} height={32} />
  }
];

// ----------------------------------------------------------------------

interface SiteItemProps {
  site: Social;
}

function SiteItem({ site }: SiteItemProps) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        <Typography variant="h6">{fShortenNumber(value)}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function AppTrafficBySite() {
  return (
    <Card>
      <CardHeader title="Traffic by Site" />
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
