import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOff'

      short_name='NotificationsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M646-200H200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-33 8.5-65t25.5-61l60 60q-7 16-10.5 32.5T320-560v280h248L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11L646-200ZM540-792q80 20 130 84.5T720-560v110q0 20-12.5 30T680-410q-15 0-27.5-10.5T640-451v-109q0-66-47-113t-113-47q-16 0-34 4t-32 10q-17 7-33.5 3T355-722q-8-13-5.5-27.5T365-771q13-7 27-12t28-9v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28Zm-96 388Zm36 324q-30 0-53.5-16.5T403-141q0-8 6.5-13.5T424-160h112q8 0 14.5 5.5T557-141q0 28-23.5 44.5T480-80Zm33-481Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOff.displayName = 'OnesyIconMaterialNotificationsOff';

export default IconMaterialNotificationsOff;
