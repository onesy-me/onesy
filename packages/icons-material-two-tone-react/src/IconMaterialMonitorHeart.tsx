import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorHeart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeart'

      short_name='MonitorHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M15.11,12.45L14,10.24l-3.11,6.21C10.72,16.79,10.38,17,10,17s-0.72-0.21-0.89-0.55L7.38,13H2v2h2v3h16v-3 h2v-2h-6C15.62,13,15.28,12.79,15.11,12.45z" opacity=".3"/><path d="M20,6H4v3H2v2h6c0.38,0,0.72,0.21,0.89,0.55L10,13.76l3.11-6.21c0.34-0.68,1.45-0.68,1.79,0L16.62,11H22V9 h-2V6z" opacity=".3"/><path d="M20,4H4C2.9,4,2,4.9,2,6v3h2V6h16v3h2V6C22,4.9,21.1,4,20,4z"/><path d="M20,18H4v-3H2v3c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-3h-2V18z"/><path d="M14.89,7.55c-0.34-0.68-1.45-0.68-1.79,0L10,13.76l-1.11-2.21C8.72,11.21,8.38,11,8,11H2v2h5.38l1.72,3.45 C9.28,16.79,9.62,17,10,17s0.72-0.21,0.89-0.55L14,10.24l1.11,2.21C15.28,12.79,15.62,13,16,13h6v-2h-5.38L14.89,7.55z"/></g></g>
    </Icon>
  );
});

IconMaterialMonitorHeart.displayName = 'OnesyIconMaterialMonitorHeart';

export default IconMaterialMonitorHeart;
