import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoffee = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Coffee'

      short_name='Coffee'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M6,11c0,2.76,2.24,5,5,5s5-2.24,5-5v-1H6V11z" opacity=".3"/><rect height="2" width="16" x="4" y="19"/><path d="M18.5,3H6C4.9,3,4,3.9,4,5v5.71c0,3.83,2.95,7.18,6.78,7.29c3.96,0.12,7.22-3.06,7.22-7v-1h0.5c1.93,0,3.5-1.57,3.5-3.5 S20.43,3,18.5,3z M16,11c0,2.76-2.24,5-5,5s-5-2.24-5-5v-1h10V11z M16,8H6V5h10V8z M18.5,8H18V5h0.5C19.33,5,20,5.67,20,6.5 S19.33,8,18.5,8z"/></g></g>
    </Icon>
  );
});

IconMaterialCoffee.displayName = 'OnesyIconMaterialCoffee';

export default IconMaterialCoffee;
