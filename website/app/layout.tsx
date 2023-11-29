import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, createTheme, rem } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
//import { theme } from '../theme';
import '@mantine/notifications/styles.css';

const theme = createTheme({
  colors: {
    gold: ['#E4C696', '#E4C696', '#E4C696', '#E4C696', '#E4C696', '#E4C696', '#E4C696', '#E4C696', '#E4C696', '#E4C696'], // portfolio header text color
    taupe: ['#6F6058', '#6F6058', '#6F6058', '#6F6058', '#6F6058', '#6F6058', '#6F6058', '#6F6058', '#6F6058', '#6F6058'], // portfolio bg
    copper: ['#BB7369', '#BB7369', '#BB7369', '#BB7369', '#BB7369', '#BB7369', '#BB7369', '#BB7369', '#BB7369', '#BB7369'],
    yellow: ['#F5EFBB', '#F5EFBB', '#F5EFBB', '#F5EFBB', '#F5EFBB', '#F5EFBB', '#F5EFBB', '#F5EFBB', '#F5EFBB', '#F5EFBB'], // tab bg
    // supplemental colors
    blue: ['#39B1B0', '#39B1B0', '#39B1B0', '#39B1B0', '#39B1B0', '#39B1B0', '#39B1B0', '#39B1B0', '#39B1B0', '#39B1B0'],
    green: ['#68AA68', '#68AA68', '#68AA68', '#68AA68', '#68AA68', '#68AA68', '#68AA68', '#68AA68', '#68AA68', '#68AA68'], // $$ and submit
    red: ['#D34733', '#D34733', '#D34733', '#D34733', '#D34733', '#D34733', '#D34733', '#D34733', '#D34733', '#D34733'], // tax
  },

  primaryColor: 'yellow',

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Inika',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});

export const metadata = {
  title: 'Tax Hero',
  description: 'a game about how the rich avoid taxes',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}><Notifications position="top-right" limit={5}/>{children}</MantineProvider>
      </body>
    </html>
  );
}
