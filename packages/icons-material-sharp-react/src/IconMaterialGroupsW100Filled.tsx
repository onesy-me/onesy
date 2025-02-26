import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupsW100Filled'

      short_name='Groups'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M52-262v-26q0-35 38-58.5t97-23.5q8 0 18 1t22 3q-8 15-11.5 30.5T212-305v43H52Zm240 0v-39q0-21.84 13-39.92Q318-359 344-372t60-19.5q34-6.5 75.6-6.5 42.4 0 76.4 6.5 34 6.5 60 19.5t39 31.08q13 18.08 13 39.92v39H292Zm456 0v-42.7q0-17.08-3.5-32.19T734-366q13-2 22.5-3t17.5-1q59 0 96.5 23.5T908-288v26H748ZM186.73-407q-20.73 0-35.23-14.69Q137-436.38 137-457q0-20 14.69-34.5T187-506q20 0 35 14.5t15 34.8q0 19.7-14.45 34.7-14.45 15-35.82 15ZM774-407q-20 0-35-15t-15-34.7q0-20.3 15-34.8 15-14.5 35.19-14.5 20.81 0 35.31 14.5Q824-477 824-457q0 20.62-14.37 35.31Q795.25-407 774-407Zm-293.65-21Q448-428 425-450.75T402-506q0-33.15 22.75-55.58Q447.5-584 480-584q33.15 0 55.58 22.32Q558-539.35 558-506.35 558-474 535.68-451q-22.33 23-55.33 23Z"/>
    </Icon>
  );
});

IconMaterialGroupsW100Filled.displayName = 'OnesyIconMaterialGroupsW100Filled';

export default IconMaterialGroupsW100Filled;
