module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#6D41E9',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
     textColor: {
      'primary': '#3E70FB',
     'secondary': '#031E52',
     'danger': '#e3342f',
     'white':'#ffffff'
   },
    extend: {},
  },

  
  variants: {
    extend: {},
  },
  plugins: [],

  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
    orange:{
      100: '#a89332'
    },
   
},


fontFamily: {
  'Helvetica':['Helvetica'],
  'Arial':['Arial']
 },

 boxShadow: {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
 '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
}

}
