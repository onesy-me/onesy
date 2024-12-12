import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGirlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GirlW100'

      short_name='Girl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.8-660q-20.8 0-35.3-14.7-14.5-14.7-14.5-35.5t14.7-35.3q14.7-14.5 35.5-14.5t35.3 14.7q14.5 14.7 14.5 35.5t-14.7 35.3Q500.6-660 479.8-660ZM434-214v-150h-65l78-229q4-11 12.86-17t20-6q11.14 0 20.14 6t13 17l78 229h-65v150h-92Z"/>
    </Icon>
  );
});

IconMaterialGirlW100.displayName = 'OnesyIconMaterialGirlW100';

export default IconMaterialGirlW100;
