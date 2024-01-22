import {
    Header as CarbonHeader,
    HeaderName,
    SkipToContent,
    HeaderGlobalBar,
    HeaderGlobalAction,
    Link, Tag
} from '@carbon/react';
import { LogoGithub } from '@carbon/icons-react';
import { FC } from 'react';

import './Header.modules.scss';

interface Props {
    headerHref: string;
}

const tagValue = 'beta';

const Header: FC<Props> = ({ headerHref }) => {
    return (
        <>
            <CarbonHeader aria-label="DirectShare">
                <SkipToContent />
                <HeaderName href={headerHref} prefix="" className='header-name'>
                    DirectShare
                    <Tag className='header-tag' type="red" title="beta">{tagValue}</Tag>
                </HeaderName>
                <HeaderGlobalBar />
                <HeaderGlobalAction aria-label="GitHub">
                    <Link href="http://github.com/itskdhere/DirectShare" target="_blank" rel="noopener noreferrer" >
                        <LogoGithub size={24} />
                    </Link>
                </HeaderGlobalAction>
            </CarbonHeader>
        </>
    );
};

export default Header;