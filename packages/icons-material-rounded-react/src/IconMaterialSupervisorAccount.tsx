import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupervisorAccount = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisorAccount'

      short_name='SupervisorAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-360q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM480-200v-16q0-24 12.5-44.5T528-290q36-15 74.5-22.5T680-320q39 0 77.5 7.5T832-290q23 9 35.5 29.5T880-216v16q0 17-11.5 28.5T840-160H520q-17 0-28.5-11.5T480-200Zm-80-280q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-160ZM80-272q0-34 17-62.5t47-43.5q60-30 124.5-46T400-440q35 0 70 6t70 14l-34 34-34 34q-18-5-36-6.5t-36-1.5q-58 0-113.5 14T180-306q-10 5-15 14t-5 20v32h240v39q0 13 5 23.5t14 17.5H160q-33 0-56.5-23.5T80-240v-32Zm320 32Zm0-320q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccount.displayName = 'OnesyIconMaterialSupervisorAccount';

export default IconMaterialSupervisorAccount;
