const theme = {
  contentWidth: '900px',
  color: {
    primary: '#ff385c',
    secondary: '#00848a'
  },
  font: {
    dark: '#222222',
    middle: '#484848',
    light: '#767676'
  },
  mixins: {
    boxShadow: `transition: box-shadow 200ms ease;
    &:hover{
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    }`,
  },
}

export default theme