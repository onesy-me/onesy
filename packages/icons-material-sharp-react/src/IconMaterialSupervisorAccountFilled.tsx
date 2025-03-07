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
      <path d="M80-160v-112q0-34 17-62.5t47-43.5q60-30 124.5-46T400-440q25 0 50 3.5t50 8.5v63q-45 22-72.5 58T400-213v53H80Zm400 0v-56q0-24 12.5-44.5T528-290q36-15 74.5-22.5T680-320q39 0 77.5 7.5T832-290q23 9 35.5 29.5T880-216v56H480Zm200-200q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccountFilled.displayName = 'OnesyIconMaterialSupervisorAccountFilled';

export default IconMaterialSupervisorAccountFilled;
