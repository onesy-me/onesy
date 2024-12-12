import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltFilled'

      short_name='Bolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-360H236q-24 0-35.5-21.5T203-423l299-430q10-14 26-19.5t33 .5q17 6 25 21t6 32l-32 259h155q26 0 36.5 23t-6.5 43L416-100q-11 13-27 17t-31-3q-15-7-23.5-21.5T328-139l32-221Z"/>
    </Icon>
  );
});

IconMaterialBoltFilled.displayName = 'OnesyIconMaterialBoltFilled';

export default IconMaterialBoltFilled;
