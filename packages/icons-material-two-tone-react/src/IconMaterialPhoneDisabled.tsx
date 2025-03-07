import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabled'

      short_name='PhoneDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><g><g><path d="M17.34,14.54l-1.43-1.43c0.56-0.73,1.05-1.5,1.47-2.32l-2.2-2.2c-0.28-0.28-0.36-0.67-0.25-1.02 C15.3,6.45,15.5,5.25,15.5,4c0-0.55,0.45-1,1-1H20c0.55,0,1,0.45,1,1C21,7.98,19.63,11.64,17.34,14.54z M14.52,17.35 C11.63,19.64,7.97,21,4,21c-0.55,0-1-0.45-1-1v-3.49c0-0.55,0.45-1,1-1c1.24,0,2.45-0.2,3.57-0.57c0.1-0.04,0.21-0.05,0.31-0.05 c0.26,0,0.51,0.1,0.71,0.29l2.2,2.2c0.81-0.42,1.58-0.9,2.3-1.46L1.39,4.22l1.42-1.41L21.19,21.2l-1.41,1.41L14.52,17.35z M17.46,5c-0.06,0.89-0.21,1.76-0.45,2.59l1.2,1.2c0.41-1.2,0.67-2.47,0.76-3.79H17.46z M7.6,17.02c-0.85,0.24-1.72,0.39-2.6,0.45 v1.49c1.32-0.09,2.59-0.35,3.8-0.75L7.6,17.02z"/></g></g>
    </Icon>
  );
});

IconMaterialPhoneDisabled.displayName = 'OnesyIconMaterialPhoneDisabled';

export default IconMaterialPhoneDisabled;
