import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3p = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3p'

      short_name='3p'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M4,4v13.17L5.17,16H20V4H4z M12,6c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,6,12,6z M16,14H8v-0.57 c0-0.81,0.48-1.53,1.22-1.85C10.07,11.21,11.01,11,12,11c0.99,0,1.93,0.21,2.78,0.58C15.52,11.9,16,12.62,16,13.43V14z" opacity=".3"/><path d="M20,2H4.01c-1.1,0-2,0.9-2,2L2,22l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.17L4,17.17V4h16V16z M12,10 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,10,12,10z M16,13.43c0-0.81-0.48-1.53-1.22-1.85C13.93,11.21,12.99,11,12,11 c-0.99,0-1.93,0.21-2.78,0.58C8.48,11.9,8,12.62,8,13.43V14h8V13.43z"/></g>
    </Icon>
  );
});

IconMaterial3p.displayName = 'OnesyIconMaterial3p';

export default IconMaterial3p;
