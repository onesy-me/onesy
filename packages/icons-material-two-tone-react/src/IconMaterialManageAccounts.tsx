import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManageAccounts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageAccounts'

      short_name='ManageAccounts'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><circle cx="10" cy="8" enableBackground="new" opacity=".3" r="2"/><path d="M10,16c0-0.34,0.03-0.67,0.08-0.99C10.05,15,10.03,15,10,15 c-1.97,0-3.9,0.53-5.59,1.54C4.16,16.68,4,17,4,17.35V18h6.29C10.1,17.37,10,16.7,10,16z" enableBackground="new" opacity=".3"/></g><path d="M4,18v-0.65c0-0.34,0.16-0.66,0.41-0.81C6.1,15.53,8.03,15,10,15c0.03,0,0.05,0,0.08,0.01c0.1-0.7,0.3-1.37,0.59-1.98 C10.45,13.01,10.23,13,10,13c-2.42,0-4.68,0.67-6.61,1.82C2.51,15.34,2,16.32,2,17.35V20h9.26c-0.42-0.6-0.75-1.28-0.97-2H4z M10,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S6,5.79,6,8S7.79,12,10,12z M10,6c1.1,0,2,0.9,2,2s-0.9,2-2,2S8,9.1,8,8S8.9,6,10,6z"/><path d="M20.83,12.63l-1.45,0.49c-0.32-0.27-0.68-0.48-1.08-0.63L18,11h-2l-0.3,1.49c-0.4,0.15-0.76,0.36-1.08,0.63l-1.45-0.49 l-1,1.73l1.14,1c-0.03,0.21-0.06,0.41-0.06,0.63s0.03,0.42,0.06,0.63l-1.14,1l1,1.73l1.45-0.49c0.32,0.27,0.68,0.48,1.08,0.63 L16,21h2l0.3-1.49c0.4-0.15,0.76-0.36,1.08-0.63l1.45,0.49l1-1.73l-1.14-1c0.03-0.21,0.06-0.41,0.06-0.63s-0.03-0.42-0.06-0.63 l1.14-1L20.83,12.63z M17,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C19,17.1,18.1,18,17,18z"/></g></g>
    </Icon>
  );
});

IconMaterialManageAccounts.displayName = 'OnesyIconMaterialManageAccounts';

export default IconMaterialManageAccounts;
