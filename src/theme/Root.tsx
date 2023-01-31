import React, {
    FC,
    memo,
    PropsWithChildren,
    useCallback,
    useEffect,
} from 'react';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider } from 'react-mixpanel';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = PropsWithChildren & {};

const Root: FC<Props> = ({ children }) => {
    const location = useLocation();

    const {
        siteConfig: { customFields },
    } = useDocusaurusContext();

    useEffect(() => {
        mixpanel.init(customFields.MIXPANEL_TOKEN);
    }, [customFields.MIXPANEL_TOKEN]);

    const handleRouteChange = useCallback((url: string) => {
        mixpanel.track('Page view', {
            url,
        });
    }, []);

    useEffect(() => {
        handleRouteChange(location.pathname);
    }, [handleRouteChange, location]);

    return <MixpanelProvider mixpanel={mixpanel}>{children}</MixpanelProvider>;
};

export default memo(Root);
