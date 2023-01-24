import React from 'react';

export type FeatureItem = {
    title: string;
    description: JSX.Element;
};

export const FEATURES: FeatureItem[] = [
    {
        title: 'Show multiple images',
        description: (
            <>
                If the post contains multiple images they will be displayed the
                best way possible with the available space.
            </>
        ),
    },
    {
        title: 'Different image sizes',
        description: (
            <>
                Choose from a curated set of aspect ratios to share your images
                in an optimal way.
            </>
        ),
    },
    {
        title: 'Show embedded tweets',
        description: (
            <>
                If the post contains an embedded tweet, it will be shown on the
                result image as well.
            </>
        ),
    },
    {
        title: 'Dark and Light themes',
        description: (
            <>
                Make it dark or light, based on your preferences. If you don't
                believe me try to switch the theme in this website and see how
                images look now.
            </>
        ),
    },
    {
        title: 'Use any custom background color',
        description: (
            <>
                You can use any color to use it as background, even auto-assign
                the one from the flair!
            </>
        ),
    },
    {
        title: 'Blurred image as background',
        description: (
            <>
                If the post contains an image, you can choose to show a blurred
                version of that image as the background.
            </>
        ),
    },
    {
        title: 'Hide author',
        description: (
            <>
                You can choose to not include the author username in the
                resulting image.
            </>
        ),
    },
    {
        title: 'Auto-ellipsized content',
        description: (
            <>
                In case the post that you want to display has a large text that
                doesn't fit, it will automatically be ellipsized.
            </>
        ),
    },
];
