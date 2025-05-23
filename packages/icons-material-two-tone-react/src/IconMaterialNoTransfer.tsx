import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoTransfer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransfer'

      short_name='NoTransfer'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M14.83,12H18v3.17L14.83,12z M9.17,12l5,5H6.63l-0.29-0.27 C6.21,16.62,6,16.37,6,16v-4H9.17z M10,14.5c0-0.83-0.67-1.5-1.5-1.5S7,13.67,7,14.5C7,15.33,7.67,16,8.5,16S10,15.33,10,14.5z M7.82,4.99h9.83C17.11,4.46,15.69,4,12,4C9.6,4,8.17,4.2,7.31,4.48L7.82,4.99z" enableBackground="new" opacity=".3"/><path d="M8.5,13c0.83,0,1.5,0.67,1.5,1.5S9.33,16,8.5,16S7,15.33,7,14.5S7.67,13,8.5,13z M7.31,4.48C8.17,4.2,9.6,4,12,4 c3.69,0,5.11,0.46,5.66,0.99H7.82l2,2H18V10h-5.17l2,2H18v3.17l1.81,1.81C19.92,16.67,20,16.35,20,16V6c0-3.5-3.58-4-8-4 C9.48,2,7.24,2.16,5.78,2.95L7.31,4.48z M19.78,22.61l-1.64-1.64C18.09,20.98,18.05,21,18,21h-1c-0.55,0-1-0.45-1-1v-1H8v1 c0,0.55-0.45,1-1,1H6c-0.55,0-1-0.45-1-1v-1.78C4.39,17.67,4,16.88,4,16V6.83L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M6,8.83 V10h1.17L6,8.83z M14.17,17l-5-5H6v4c0,0.37,0.21,0.62,0.34,0.73L6.63,17H8H14.17z"/>
    </Icon>
  );
});

IconMaterialNoTransfer.displayName = 'OnesyIconMaterialNoTransfer';

export default IconMaterialNoTransfer;
