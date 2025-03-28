import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccount = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccount'

      short_name='SwitchAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M8,15.73C9.47,14.06,11.6,13,14,13s4.53,1.06,6,2.73V4H8V15.73z M14,5 c1.66,0,3,1.34,3,3c0,1.66-1.34,3-3,3s-3-1.34-3-3C11,6.34,12.34,5,14,5z" enableBackground="new" opacity=".3"/><path d="M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z M14,11c1.66,0,3-1.34,3-3c0-1.66-1.34-3-3-3s-3,1.34-3,3C11,9.66,12.34,11,14,11z M14,7c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S13.45,7,14,7z M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2 V4C22,2.9,21.1,2,20,2z M10.69,16c0.95-0.63,2.09-1,3.31-1s2.36,0.37,3.31,1H10.69z M20,15.73C18.53,14.06,16.4,13,14,13 s-4.53,1.06-6,2.73V4h12V15.73z"/></g></g>
    </Icon>
  );
});

IconMaterialSwitchAccount.displayName = 'OnesyIconMaterialSwitchAccount';

export default IconMaterialSwitchAccount;
