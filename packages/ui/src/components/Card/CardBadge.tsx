import React from 'react';
import styled, { css } from 'styled-components';
import { blackSecondary, whiteSecondary } from '@sberdevices/plasma-tokens';

import { View } from '../../mixins/applyView';
import { Badge, BadgeSize } from '../Badge/Badge';

// Для совместимости. https://github.com/sberdevices/plasma/issues/12
export const colorsToViews = {
    active: 'primary',
    highlight: 'primary',
    blank: 'checked',
    accent: 'warning',
    index: 'secondary',
};

type CompatColor = keyof typeof colorsToViews;

const StyledRoot = styled(Badge)`
    position: absolute;

    ${({ view }) =>
        view === 'secondary' &&
        css`
            background-color: ${blackSecondary};
            color: ${whiteSecondary};
        `}
`;

export interface CardBadgeProps {
    size?: BadgeSize;
    view?: View;
    className?: string;
    // Для совместимости. https://github.com/sberdevices/plasma/issues/12
    color?: CompatColor;
}

export const CardBadge: React.FC<CardBadgeProps> = ({ className, children, size, view, color = 'active' }) => (
    <StyledRoot
        view={view || (colorsToViews[color] as View)}
        size={size}
        className={className}
        text={children as string}
    />
);
