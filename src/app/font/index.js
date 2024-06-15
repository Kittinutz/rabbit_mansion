import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
export const saoChingCha = localFont({
  src: [
    {
      path: './SaoChingcha-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './SaoChingcha-Regular.otf',
      weight: '400',
    },
    {
      path: './SaoChingcha-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})