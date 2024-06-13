// components/LinkComponent.tsx
import React from 'react';

interface LinkComponentProps {
    href: string;
    text: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ href, text }) => {
    return (
        <a href={href} className="text-blue-600 visited:text-purple-600">
            {text}
        </a>
    );
};

export default LinkComponent;
