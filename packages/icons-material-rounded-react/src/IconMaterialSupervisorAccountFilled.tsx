import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupervisorAccountFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisorAccountFilled'

      short_name='SupervisorAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-360q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM520-160q-17 0-28.5-11.5T480-200v-16q0-24 12.5-44.5T528-290q36-15 74.5-22.5T680-320q39 0 77.5 7.5T832-290q23 9 35.5 29.5T880-216v16q0 17-11.5 28.5T840-160H520ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-272q0-34 17-62.5t47-43.5q60-30 124.5-46T400-440q35 0 70 6t70 14l-68 68q-25 25-48.5 51T400-240v39q0 12 4.5 22.5T419-160H160q-33 0-56.5-23.5T80-240v-32Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccountFilled.displayName = 'OnesyIconMaterialSupervisorAccountFilled';

export default IconMaterialSupervisorAccountFilled;
