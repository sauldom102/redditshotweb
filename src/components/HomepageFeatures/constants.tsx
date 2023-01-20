import React from 'react';

export type FeatureItem = {
    title: string;
    img: string;
    darkImg: string;
    description: JSX.Element;
};

export const FEATURES: FeatureItem[] = [
    {
        title: 'Show multiple images',
        img: '/img/reddit/image-gallery.png',
        darkImg: '/img/reddit/image-gallery-dark.png',
        description: (
            <>
                If the post contains multiple images they will be displayed the
                best way possible with the available space.
            </>
        ),
    },
    {
        title: 'Blurred image as background',
        img: '/img/reddit/background-image.png',
        darkImg: '/img/reddit/background-image-dark.png',
        description: (
            <>
                If the post contains an image, you can choose to show a blurred
                version of that image as the background.
            </>
        ),
    },
    {
        title: 'Show embedded tweets',
        img: '/img/reddit/post-with-tweet.png',
        darkImg: '/img/reddit/post-with-tweet-dark.png',
        description: (
            <>
                If the post contains an embedded tweet, it will be shown on the
                result image as well.
            </>
        ),
    },
    {
        title: 'Text-only posts',
        img: '/img/reddit/simple.png',
        darkImg: '/img/reddit/simple-dark.png',
        description: <>The simplest post types are supported</>,
    },
    {
        title: 'Use any custom background color',
        img: '/img/reddit/custom-background-color.png',
        darkImg: '/img/reddit/custom-background-color-dark.png',
        description: (
            <>
                You can use any color to use it as background, even auto-assign
                the one from the flair!
            </>
        ),
    },
    {
        title: 'Auto-ellipsized content',
        img: '/img/reddit/auto-ellipsize.png',
        darkImg: '/img/reddit/auto-ellipsize-dark.png',
        description: (
            <>
                In case the post that you want to display has a large text that
                doesn't fit, it will automatically be ellipsized.
            </>
        ),
    },
];
