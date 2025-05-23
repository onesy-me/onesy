import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3mp'

      short_name='3mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1.5" opacity=".3" width="1.5" x="15" y="14"/><path d="M5,19h14V5H5V19z M18,13.5V16c0,0.55-0.45,1-1,1h-2v1.5h-1.5v-6H17C17.55,12.5,18,12.95,18,13.5z M10,10h3 V9h-2V8h2V7h-3V5.5h3.5c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H10V10z M6,13.5c0-0.55,0.45-1,1-1h4.5c0.55,0,1,0.45,1,1v5H11V14 h-1v3H8.5v-3h-1v4.5H6V13.5z" opacity=".3"/><path d="M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z"/><path d="M13.5,18.5H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1h-3.5V18.5z M15,14h1.5v1.5H15V14z"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><path d="M14.5,10.5v-4c0-0.55-0.45-1-1-1H10V7h3v1h-2v1h2v1h-3v1.5h3.5C14.05,11.5,14.5,11.05,14.5,10.5z"/></g></g>
    </Icon>
  );
});

IconMaterial3mp.displayName = 'OnesyIconMaterial3mp';

export default IconMaterial3mp;
