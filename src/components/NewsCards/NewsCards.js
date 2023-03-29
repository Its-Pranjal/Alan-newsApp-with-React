import React from 'react';
import { Grid, Grow, Typography } from '@mui/material';

import NewsCard from './NewsCard/NewsCard';
import { styled } from '@mui/material/styles';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];
  

const GridContainer = styled(Grid)(({ theme }) => ({
[theme.breakpoints.down('sm')]: {
flexDirection: 'column',
},
}));

const NewsCards = ({ articles, activeArticle }) => {
const classes = useStyles();

if (!articles.length) {
return (
<Grow in>
<GridContainer container alignItems="stretch" spacing={3}>
{infoCards.map((infoCard) => (
<Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }} key={infoCard.title}>
<Box
sx={{
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-between',
borderRadius: 10,
position: 'relative',
backgroundColor: infoCard.color,
color: 'white',
height: '100%',
padding: '20px',
transition: 'transform .2s',
'&:hover': {
transform: 'scale(1.1)',
},
[theme.breakpoints.down('sm')]: {
width: '100%',
height: 'initial',
flexDirection: 'row',
'&:hover': {
transform: 'none',
},
},
}}
>
<Typography variant="h5" component="h5">{infoCard.title}</Typography>
{infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
<Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
</Box>
</Grid>
))}
</GridContainer>
</Grow>
);
}

return (
<Grow in>
<GridContainer container alignItems="stretch" spacing={3}>
{articles.map((article, i) => (
<Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }} key={article.title}>
<NewsCard activeArticle={activeArticle} i={i} article={article} />
</Grid>
))}
</GridContainer>
</Grow>
);
};

export default NewsCards;




