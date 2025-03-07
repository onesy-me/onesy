import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNotificationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsW100Filled'

      short_name='EditNotifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-112q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM734-212H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h46v-328q0-77 49.5-135T446-774v-20q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v20l8 2 8 2q17 5 20.5 21.5T541-719L410-589q-8.25 8.11-13.12 19.16Q392-558.79 392-547v135q0 24.75 17.63 42.37Q427.25-352 452-352h135q11.83 0 22.91-5Q621-362 629-370l21-21q11-11 24.5-5.21Q688-390.43 688-375v135h46q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM492-482v-36q0-6 2-11t7-10l202-201q5-4 9.78-6 4.79-2 10-2 5.22 0 10.78 2.22 5.57 2.22 9.44 5.78l37 38q4 5 6 9.77 2 4.78 2 10.23 0 5.49-2 10.74-2 5.26-6 9.26L579-461q-5 5-10.22 7-5.21 2-10.78 2h-36q-12.75 0-21.37-8.63Q492-469.25 492-482Zm231-162 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsW100Filled.displayName = 'OnesyIconMaterialEditNotificationsW100Filled';

export default IconMaterialEditNotificationsW100Filled;
