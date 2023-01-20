import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { FeatureItem, FEATURES } from './constants';

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx(styles.feature)}>
            <div className="padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function AllFeatures(): JSX.Element {
    return (
        <section id="features" className={clsx(styles.container)}>
            <h1 className={styles.title}>All Features</h1>
            <div className={clsx('container', styles.features)}>
                {FEATURES.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}
