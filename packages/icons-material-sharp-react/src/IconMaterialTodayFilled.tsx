import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTodayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodayFilled'

      short_name='Today'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Z"/>
    </Icon>
  );
});

IconMaterialTodayFilled.displayName = 'OnesyIconMaterialTodayFilled';

export default IconMaterialTodayFilled;
