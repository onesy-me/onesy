import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupervisedUserCircleOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisedUserCircleOffFilled'

      short_name='SupervisedUserCircleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-55-91-91q-48 32-103.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-61 17-116.5T146-700l-91-91 57-57 736 736-57 57ZM477-161q45 0 86-11.5t77-33.5l-91-91q-38 17-74.5 47.5T412-168q16 3 32 5t33 2Zm-124-25q35-72 79.5-107t67.5-47q-29-9-58.5-14.5T380-360q-45 0-89 11t-85 31q26 43 63.5 77.5T353-186Zm461-74L690-384q31-10 50.5-36t19.5-60q0-42-29-71t-71-29q-34 0-60 19.5T564-510l-44-44q2-61-41-104.5T374-700L260-814q48-32 103.5-49T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 61-17 116.5T814-260ZM380-420q11 0 20.5-1.5T420-426L246-600q-3 10-4.5 19.5T240-560q0 58 41 99t99 41Z"/>
    </Icon>
  );
});

IconMaterialSupervisedUserCircleOffFilled.displayName = 'OnesyIconMaterialSupervisedUserCircleOffFilled';

export default IconMaterialSupervisedUserCircleOffFilled;
