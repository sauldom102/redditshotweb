import React, { useCallback } from 'react';
import clsx from 'clsx';
import mixpanel from 'mixpanel-browser';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import AllFeatures from '../components/AllFeatures';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    const handlePressGetStarted = useCallback(() => {
        mixpanel.track('Get Started Button Pressed');
    }, []);

    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="https://api.redditshot.com/docs"
                        onClick={handlePressGetStarted}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title="" description={`${siteConfig.tagline}`}>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <AllFeatures />
            </main>
        </Layout>
    );
}
