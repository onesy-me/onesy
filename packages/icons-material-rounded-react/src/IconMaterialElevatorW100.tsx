import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElevatorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorW100'

      short_name='Elevator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-416v120q0 13 8.5 21.5T356-266h8q13 0 21.5-8.5T394-296v-120h10q13 0 21.5-8.5T434-446v-74q0-23-15.5-38.5T380-574h-40q-23 0-38.5 15.5T286-520v74q0 13 8.5 21.5T316-416h10Zm34-194q17 0 28.5-11.5T400-650q0-17-11.5-28.5T360-690q-17 0-28.5 11.5T320-650q0 17 11.5 28.5T360-610Zm211 64h78q5 0 7-3.5t0-7.5l-40-64q-2-4-6-4t-6 4l-40 64q-2 4 0 7.5t7 3.5Zm45 207 40-64q2-4 0-7.5t-7-3.5h-78q-5 0-7 3.5t0 7.5l40 64q2 4 6 4t6-4ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q14 0 23-9t9-23v-496q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm-32 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialElevatorW100.displayName = 'OnesyIconMaterialElevatorW100';

export default IconMaterialElevatorW100;
