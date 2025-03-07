import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTokenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TokenW100Filled'

      short_name='Token'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M369-558q23-29 52-42.5t59-13.5q31 0 59.5 13.5T591-558l208-115-290-161q-14-8-29-8t-29 8L161-673l208 115Zm97 440v-227q-52-8-86-45.5T346-480q0-14 2.5-26t7.5-26L146-650v320q0 17 8.5 30.5T177-278l289 160Zm14-256q44 0 75-31t31-75q0-44-31-75t-75-31q-44 0-75 31t-31 75q0 44 31 75t75 31Zm14 256 289-160q14-8 22.5-21.5T814-330v-320L604-532q5 15 7.5 26.5T614-480q0 52-34 89.5T494-345v227Z"/>
    </Icon>
  );
});

IconMaterialTokenW100Filled.displayName = 'OnesyIconMaterialTokenW100Filled';

export default IconMaterialTokenW100Filled;
