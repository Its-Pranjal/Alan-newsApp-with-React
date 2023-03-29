import { styled } from '@mui/material/styles';

const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '45vh',
  padding: '10%',
  borderRadius: 10,
  color: 'white',
});

const InfoCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const Container = styled('div')({
  padding: '0 5%',
  width: '100%',
  margin: 0,
});

export { Card, InfoCard, Container };