import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSystemUpdateAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateAltFilled'

      short_name='SystemUpdateAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h280v80H160v480h640v-480H600v-80h280v640H80Zm400-184L280-544l56-56 104 104v-304h80v304l104-104 56 56-200 200Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateAltFilled.displayName = 'OnesyIconMaterialSystemUpdateAltFilled';

export default IconMaterialSystemUpdateAltFilled;
