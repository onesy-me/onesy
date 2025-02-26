import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupervisedUserCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisedUserCircle'

      short_name='SupervisedUserCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-168q45-91 120-121.5T660-320q23 0 45 4t43 10q24-38 38-82t14-92q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 45 11.5 86t34.5 76q41-20 85-31t89-11q32 0 61.5 5.5T500-340q-23 12-43.5 28T418-278q-12-2-20.5-2H380q-32 0-63.5 7T256-252q32 32 71.5 53.5T412-168Zm68 88q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM380-420q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T440-560q0-25-17.5-42.5T380-620q-25 0-42.5 17.5T320-560q0 25 17.5 42.5T380-500Zm280 120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialSupervisedUserCircle.displayName = 'OnesyIconMaterialSupervisedUserCircle';

export default IconMaterialSupervisedUserCircle;
