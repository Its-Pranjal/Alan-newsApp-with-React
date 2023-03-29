/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

import logo from './images/logo.png';
import Modal from './components/Modal/Modal';
import useStyles from './styles';

function App() {
  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: 'd14f870f82cd31cdaaaaa36d3cc7bf4e2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber =						number.length > 2
						  // eslint-disable-next-line no-mixed-spaces-and-tabs
						  ? wordsToNumbers(number, { fuzzy: true })
						  : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="logo"
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Created by
            <a
              className={classes.link}
              href="https://www.linkedin.com/in/adrian-hajdin/"
            >
              {' '}
              Adrian Hajdin
            </a>{' '}
            -
            <a
              className={classes.link}
              href="http://youtube.com/javascriptmastery"
            >
              {' '}
              JavaScript Mastery
            </a>
          </Typography>
          <img
            className={classes.image}
            src={logo}
            height="50px"
            alt="JSMastery logo"
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
