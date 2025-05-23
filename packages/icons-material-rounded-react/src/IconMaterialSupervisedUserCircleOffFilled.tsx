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
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-61 17-116.5T146-700l-63-63q-12-12-11.5-28.5T84-820q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84l-63-62q-48 32-103.5 49T480-80Zm-3-81q45 0 86-11.5t77-33.5l-91-91q-38 17-74.5 47.5T412-168q16 3 32 5t33 2Zm-124-25q35-72 79.5-107t67.5-47q-29-9-58.5-14.5T380-360q-35 0-70.5 6.5T241-334q-14 5-18 20t5 28q24 32 56 57.5t69 42.5Zm127-694q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 43-8.5 83.5T846-319q-6 14-17 20.5t-25 6.5q-10 0-19.5-3.5T767-307l-77-77q31-10 50.5-36t19.5-60q0-42-29-71t-71-29q-34 0-60 19.5T564-510l-44-44q2-61-41-104.5T374-700l-67-67q-8-8-11.5-17t-3.5-19q0-14 6.5-25.5T319-846q37-17 77.5-25.5T480-880ZM380-420q11 0 20.5-1.5T420-426L246-600q-3 10-4.5 19.5T240-560q0 58 41 99t99 41Z"/>
    </Icon>
  );
});

IconMaterialSupervisedUserCircleOffFilled.displayName = 'OnesyIconMaterialSupervisedUserCircleOffFilled';

export default IconMaterialSupervisedUserCircleOffFilled;
