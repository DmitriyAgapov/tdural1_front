import localFont from '@next/font/local'

export const sfdisplaypro = localFont({
    src: [
        {
            path: '../assets/fonts/SFPro/SFProDisplay-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/SFPro/SFProDisplay-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../assets/fonts/SFPro/SFProDisplay-Regular.woff2',
            weight: '400',
            style: 'normal',
        },

        {
            path: '../assets/fonts/SFPro/SFProDisplay-Bold.woff2',
            weight: '700',
            style: 'normal',
        },

        {
            path: '../assets/fonts/SFPro/SFProDisplay-Semibold.woff2',
            weight: '600',
            style: 'normal',
        }
    ],
})