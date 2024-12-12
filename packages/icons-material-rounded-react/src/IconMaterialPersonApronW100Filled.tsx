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
      <path d="M480-512q-44.55 0-76.27-31.72Q372-575.45 372-620t31.73-76.28Q435.45-728 480-728t76.28 31.72Q588-664.55 588-620t-31.72 76.28Q524.55-512 480-512Zm130 280v-157q22.92 6.95 44.92 15.2T698-356q22 11 36 30.23t14 42.18V-262q0 13-8.5 21.5T718-232H610Zm-232-88v-76q25.5-6 51-9t51-3q25.5 0 51 3t51 9v76H378Zm-166 58v-21.59q0-22.95 14-42.18T262-356q21.08-9.55 43.08-17.8T350-389v157H242q-13 0-21.5-8.5T212-262Z"/>
    </Icon>
  );
});

IconMaterialPersonApronW100Filled.displayName = 'OnesyIconMaterialPersonApronW100Filled';

export default IconMaterialPersonApronW100Filled;
