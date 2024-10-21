/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/validation.js",
  ],
  theme: {
    fontFamily : {
      Libra : ['Libre Franklin', 'sans'],
     },
     colors : {
      Black : '#000',
      White : '#FFF',
      Gray : '#CAD3DB',
      Gray2 : '#969696',
      Blue : '#4C7BF3',
      Black2 : '#15202A',
      BLue2 : '#C2D3FF',
      Blue3 : '#B8C7ED',
      Red3 : '#FF5466',
    },
    fontSize : {
      'preset-1' : ['48px', {
        lineHeight : '60px',
        letterSpacing : '0x',
        fontWeight : '400',
      }],
      'preset-2' : ['20px', {
        lineHeight : '24px',
        letterSpacing : '0x',
        fontWeight : '400',
      }],
      'preset-3' : ['16px', {
        lineHeight : '19px',
        letterSpacing : '0x',
        fontWeight : '400',
      }],
      'preset-4' : ['12px', {
        lineHeight : '15px',
        letterSpacing : '0x',
        fontWeight : '400',
      }],
      'preset-5' : ['22px', {
        lineHeight : '32px',
        letterSpacing : '0x',
        fontWeight : '400',
      }],
    },
    extend: {
      borderRadius : {
        28 : '28px',
      },
      boxShadow : {
        buttonshadow :'0px 5px 10px 2px rgba(76, 123, 243, 0.2304)',
      }
    },
  },
  plugins: [],
}

