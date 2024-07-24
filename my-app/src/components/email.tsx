import * as React from 'react';

interface EmailTemplateProps {
  Name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name,
}) => (
  <div>
    <h1>Hi, {Name}!</h1>
    <p>Muhammad Abdullah here , How can I help you. Feel free to contact me. I will respond as soon as possible</p>
  </div>
);
