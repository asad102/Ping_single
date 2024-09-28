/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    fontFamily : {
      Libra : ['Libre Franklin', 'sans'],    },
    extend: {
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
      },
      spacing : {
        6 : '6px',
        20 : '20px',
        25 : '25px',
        28 : '28px',
        31 : '31px',
        49 : '49px',
        56 : '56px',
        94 : '94px',
        72 : '72px',
        200 : '200px',
        320 : '320px',
        383 : '383px',
        421 : '421px',
        712 : '712px',
        640 : '640px',
      },
      borderRadius : {
        28 : '28px',
      }
    },
  },
  plugins: [],
}

