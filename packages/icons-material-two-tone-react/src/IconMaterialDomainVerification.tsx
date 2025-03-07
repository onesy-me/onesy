import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainVerification = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerification'

      short_name='DomainVerification'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,18h14V8H5V18z M8.82,11.58l2.12,2.12l4.24-4.24l1.41,1.41l-5.66,5.66L7.4,13L8.82,11.58z" opacity=".3"/><polygon points="16.6,10.88 15.18,9.46 10.94,13.71 8.82,11.58 7.4,13 10.94,16.54"/><path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.11,4,19,4z M19,18H5V8h14V18z"/></g></g>
    </Icon>
  );
});

IconMaterialDomainVerification.displayName = 'OnesyIconMaterialDomainVerification';

export default IconMaterialDomainVerification;
