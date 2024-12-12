import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdUnitsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsFilled'

      short_name='AdUnits'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-600v-80h320v80H320ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsFilled.displayName = 'OnesyIconMaterialAdUnitsFilled';

export default IconMaterialAdUnitsFilled;
