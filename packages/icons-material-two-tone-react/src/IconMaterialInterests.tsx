import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInterests = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Interests'

      short_name='Interests'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M7.02,19c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S8.12,19,7.02,19z M19,19h-4v-4h4V19z M7,6.12L8.6,9H5.4 L7,6.12z M17,8.35c-1.45-1.22-3-2.4-3-3.1c0-0.43,0.35-0.75,0.75-0.75c0.31,0,0.52,0.17,0.73,0.37L17,6.3l1.52-1.43 c0.21-0.2,0.42-0.37,0.73-0.37c0.4,0,0.75,0.32,0.75,0.75C20,5.95,18.45,7.13,17,8.35z" opacity=".3"/><path d="M7.02,13c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S9.23,13,7.02,13z M7.02,19c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S8.12,19,7.02,19z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z M7,2l-5,9h10L7,2z M7,6.12L8.6,9H5.4L7,6.12z M19.25,2.5 c-1.06,0-1.81,0.56-2.25,1.17c-0.44-0.61-1.19-1.17-2.25-1.17C13.19,2.5,12,3.78,12,5.25c0,2,2.42,3.42,5,5.75 c2.58-2.33,5-3.75,5-5.75C22,3.78,20.81,2.5,19.25,2.5z M17,8.35c-1.45-1.22-3-2.4-3-3.1c0-0.43,0.35-0.75,0.75-0.75 c0.31,0,0.52,0.17,0.73,0.37L17,6.3l1.52-1.43c0.21-0.2,0.42-0.37,0.73-0.37c0.4,0,0.75,0.32,0.75,0.75C20,5.95,18.45,7.13,17,8.35z"/>
    </Icon>
  );
});

IconMaterialInterests.displayName = 'OnesyIconMaterialInterests';

export default IconMaterialInterests;
