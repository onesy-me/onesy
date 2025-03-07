import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditCalendar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendar'

      short_name='EditCalendar'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><rect height="2" opacity=".3" width="14" x="5" y="6"/><path d="M5,10h14v2h2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h7v-2H5V10z M5,6h14v2H5 V6z M22.84,16.28l-0.71,0.71l-2.12-2.12l0.71-0.71c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71C23.23,15.26,23.23,15.89,22.84,16.28z M19.3,15.58l2.12,2.12l-5.3,5.3H14v-2.12L19.3,15.58z"/>
    </Icon>
  );
});

IconMaterialEditCalendar.displayName = 'OnesyIconMaterialEditCalendar';

export default IconMaterialEditCalendar;
