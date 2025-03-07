import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupervisedUserCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisedUserCircleFilled'

      short_name='SupervisedUserCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM380-420q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm280 40q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM480-160q85 0 155-40t113-106q-21-6-43-10t-45-4q-53 0-128 31T412-167q17 4 34 5.5t34 1.5Zm-127-26q35-72 79.5-107t67.5-47q-29-9-58.5-14.5T380-360q-45 0-89 11t-85 31q26 43 63.5 77.5T353-186Z"/>
    </Icon>
  );
});

IconMaterialSupervisedUserCircleFilled.displayName = 'OnesyIconMaterialSupervisedUserCircleFilled';

export default IconMaterialSupervisedUserCircleFilled;
