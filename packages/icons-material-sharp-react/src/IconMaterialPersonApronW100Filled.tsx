import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonApronW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonApronW100Filled'

      short_name='PersonApron'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-512q-44.55 0-76.27-31.72Q372-575.45 372-620t31.73-76.28Q435.45-728 480-728t76.28 31.72Q588-664.55 588-620t-31.72 76.28Q524.55-512 480-512Zm130 280v-157q22.92 6.95 44.92 15.2T698-356q22 11 36 30.1 14 19.11 14 41.9v52H610Zm-232-88v-76q25.5-6 51-9t51-3q25.5 0 51 3t51 9v76H378Zm-166 88v-52q0-22.79 14-41.9 14-19.1 36-30.1 21.08-9.55 43.08-17.8T350-389v157H212Z"/>
    </Icon>
  );
});

IconMaterialPersonApronW100Filled.displayName = 'OnesyIconMaterialPersonApronW100Filled';

export default IconMaterialPersonApronW100Filled;
