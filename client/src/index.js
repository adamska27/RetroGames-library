import '../dist/css/style.css';
import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';


// Don't forget to add your API key
filepicker.setKey('AkDE2BSWQQymTWKWg7uZUz');

// Our views are rendered inside the #content div
ReactDom.render(
  <Routes />,
  document.getElementById('content')
);
