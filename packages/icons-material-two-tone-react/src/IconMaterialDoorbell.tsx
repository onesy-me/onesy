import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorbell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Doorbell'

      short_name='Doorbell'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M6,10v9h12v-9l-6-4.5L6,10z M12,17.5c-0.55,0-1-0.45-1-1h2C13,17.05,12.55,17.5,12,17.5z M12.75,9.25V9.5 C14.19,9.84,15,11.12,15,12.66V15h1v1H8v-1h1v-2.34c0-1.54,0.82-2.82,2.25-3.16V9.25c0-0.41,0.34-0.75,0.75-0.75 S12.75,8.84,12.75,9.25z" opacity=".3"/><path d="M12,3L4,9v12h16V9L12,3z M18,19H6v-9l6-4.5l6,4.5V19z"/><path d="M11.25,9.25V9.5C9.82,9.84,9,11.12,9,12.66V15H8v1h8v-1h-1v-2.34c0-1.54-0.81-2.82-2.25-3.16V9.25 c0-0.41-0.34-0.75-0.75-0.75S11.25,8.84,11.25,9.25z"/><path d="M12,17.5c0.55,0,1-0.45,1-1h-2C11,17.05,11.45,17.5,12,17.5z"/></g></g>
    </Icon>
  );
});

IconMaterialDoorbell.displayName = 'OnesyIconMaterialDoorbell';

export default IconMaterialDoorbell;
