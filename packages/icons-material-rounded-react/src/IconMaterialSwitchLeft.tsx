import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeft'

      short_name='SwitchLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-256q-8 0-15-3t-13-9L148-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q6-6 13-9t15-3q16 0 28 11.5t12 29.5v366q0 18-12 29.5T360-256Zm-20-89v-270L205-480l135 135Zm260 89q-16 0-28-11.5T560-297v-366q0-18 12-29.5t28-11.5q8 0 15 3t13 9l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L628-268q-6 6-13 9t-15 3Z"/>
    </Icon>
  );
});

IconMaterialSwitchLeft.displayName = 'OnesyIconMaterialSwitchLeft';

export default IconMaterialSwitchLeft;
