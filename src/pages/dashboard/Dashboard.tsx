import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import {
  People as PeopleIcon,
  SportsScore as SportsScoreIcon,
  Payment as PaymentIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  const theme = useTheme();

  const stats = [
    {
      title: 'Total Players',
      value: '23',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.primary.main,
    },
    {
      title: 'Season Goals',
      value: '45',
      icon: <SportsScoreIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.secondary.main,
    },
    {
      title: 'Pending Dues',
      value: '3',
      icon: <PaymentIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.warning.main,
    },
    {
      title: 'Ineligible Players',
      value: '2',
      icon: <WarningIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.error.main,
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to Elite FC
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: `linear-gradient(135deg, ${stat.color}22 0%, ${stat.color}11 100%)`,
                border: `1px solid ${stat.color}33`,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      backgroundColor: `${stat.color}22`,
                      display: 'flex',
                      alignItems: 'center',
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
                <Typography variant="h4" component="div" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="div"
                >
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Upcoming Matches
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body1" color="textSecondary">
              No upcoming matches scheduled
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Recent Activity
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body1" color="textSecondary">
              No recent activity
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
