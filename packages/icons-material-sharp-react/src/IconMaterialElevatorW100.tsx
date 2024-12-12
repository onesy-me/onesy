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
      <path d="M326-266h68v-150h40v-158H286v158h40v150Zm34.14-344q16.86 0 28.36-11.64t11.5-28.5q0-16.86-11.64-28.36t-28.5-11.5q-16.86 0-28.36 11.64t-11.5 28.5q0 16.86 11.64 28.36t28.5 11.5ZM557-546h106l-53-85-53 85Zm53 217 53-85H557l53 85ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialElevatorW100.displayName = 'OnesyIconMaterialElevatorW100';

export default IconMaterialElevatorW100;
