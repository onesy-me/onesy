import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationMultipleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationMultipleW100'

      short_name='NotificationMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M178-132q-26 0-43-17t-17-43v-414q0-6 4-10t10-4q6 0 10 4t4 10v414q0 14 9 23t23 9h476q6 0 10 4t4 10q0 6-4 10t-10 4H178Zm636-168v-284L564-438q-14 8-30 8t-30-8L254-584v284q0 14 9 23t23 9h496q14 0 23-9t9-23Zm-528 60q-26 0-43-17t-17-43v-298q0-14 5-23t19-17l237-139q5-3 10.5-1.5t8.5 6.5q3 5 1.5 10.5T501-753L262-612l272 160 263-154q8-5 15.5-5t14.5 4q7 4 11 10.5t4 15.5v281q0 26-17 43t-43 17H286Zm238-338 132-132q4-4 9.5-4.5T676-710q5 5 5 10t-5 10L545-559q-9 9-21 9t-21-9l-45-45q-4-4-4.5-9.5T458-624q5-5 10-5t10 5l46 46ZM286-268h-32 560-528Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultipleW100.displayName = 'OnesyIconMaterialNotificationMultipleW100';

export default IconMaterialNotificationMultipleW100;
