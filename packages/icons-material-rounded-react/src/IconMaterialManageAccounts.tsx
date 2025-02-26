import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManageAccounts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageAccounts'

      short_name='ManageAccounts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-240v-32q0-33 17-62t47-44q58-29 120-45.5T391-440q17 0 28.5 12t11.5 29q0 17-11.5 28.5T391-359q-56 0-108.5 14T180-306q-10 5-15 14t-5 20v32h231q17 0 28.5 11.5T431-200q0 17-11.5 28.5T391-160H160q-33 0-56.5-23.5T80-240Zm554 88-6-28q-12-5-22.5-10.5T584-204l-29 9q-13 4-25.5-1T510-212l-8-14q-7-12-5-26t13-23l22-19q-2-14-2-26t2-26l-22-19q-11-9-13-22.5t5-25.5l9-15q7-11 19-16t25-1l29 9q11-8 21.5-13.5T628-460l6-29q3-14 13.5-22.5T672-520h16q14 0 24.5 9t13.5 23l6 28q12 5 22.5 11t21.5 15l27-9q14-5 27 0t20 17l8 14q7 12 5 26t-13 23l-22 19q2 12 2 25t-2 25l22 19q11 9 13 22.5t-5 25.5l-9 15q-7 11-19 16t-25 1l-29-9q-11 8-21.5 13.5T732-180l-6 29q-3 14-13.5 22.5T688-120h-16q-14 0-24.5-9T634-152Zm46-88q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/>
    </Icon>
  );
});

IconMaterialManageAccounts.displayName = 'OnesyIconMaterialManageAccounts';

export default IconMaterialManageAccounts;
