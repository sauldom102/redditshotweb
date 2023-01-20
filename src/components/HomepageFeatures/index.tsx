import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import styles from './styles.module.css';
import { FeatureItem, FEATURES } from './constants';

function Feature({ title, img, darkImg, description }: FeatureItem) {
    const { isDarkTheme } = useColorMode();

    return (
        <div className={clsx(styles.feature)}>
            <img
                src={isDarkTheme ? darkImg : img}
                alt={title}
                className={styles.featureImg}
            />
            <div className="text--center padding-horiz--md">
                <h3 className={styles.featureTitle}>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={clsx('container', styles.features)}>
            {FEATURES.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
        </section>
    );
}
