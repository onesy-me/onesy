import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPage'

      short_name='ContactPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M13.17,4L18,8.83V20H6V4H13.17 M12,14c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C10,13.1,10.9,14,12,14z M16,17.43c0-0.81-0.48-1.53-1.22-1.85C13.93,15.21,12.99,15,12,15c-0.99,0-1.93,0.21-2.78,0.58C8.48,15.9,8,16.62,8,17.43V18h8 V17.43z" opacity=".3"/><path d="M13.17,4L18,8.83V20H6V4H13.17 M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2L14,2z M12,14 c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C10,13.1,10.9,14,12,14z M16,17.43c0-0.81-0.48-1.53-1.22-1.85 C13.93,15.21,12.99,15,12,15c-0.99,0-1.93,0.21-2.78,0.58C8.48,15.9,8,16.62,8,17.43V18h8V17.43z"/>
    </Icon>
  );
});

IconMaterialContactPage.displayName = 'OnesyIconMaterialContactPage';

export default IconMaterialContactPage;
