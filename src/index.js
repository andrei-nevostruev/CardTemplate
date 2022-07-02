import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CardList from './CardList';
import 'tachyons';
import { robots } from './robots'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CardList robots={robots}/>
  </StrictMode>,
);

