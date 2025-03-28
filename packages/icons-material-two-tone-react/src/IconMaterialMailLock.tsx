import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLock'

      short_name='MailLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="20,6 4,6 12,11"/><path d="M12,13L4,8v10h12v-3.03c0-2.42,1.72-4.44,4-4.9V8L12,13z" opacity=".3"/><path d="M4,18V8l8,5l8-5v2.08c0.32-0.07,0.66-0.1,1-0.1h1V6c0-1.1-0.9-2-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h12v-2 H4z M20,6l-8,5L4,6H20z"/><path d="M23,15v-1c0-1.1-0.9-2-2-2s-2,0.9-2,2v1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h1h3c0.55,0,1-0.45,1-1v-3 C24,15.45,23.55,15,23,15z M20,15v-1c0-0.55,0.45-1,1-1s1,0.45,1,1v1H20z"/></g></g>
    </Icon>
  );
});

IconMaterialMailLock.displayName = 'OnesyIconMaterialMailLock';

export default IconMaterialMailLock;
