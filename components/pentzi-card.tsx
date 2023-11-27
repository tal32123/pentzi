import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

interface PentziCardProps {
    children: React.ReactNode;
  }
  
export default function PentziCard({ children }: PentziCardProps) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 500 }}>
      <CardContent>
      {children}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}