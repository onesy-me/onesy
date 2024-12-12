import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartDisplayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayFilled'

      short_name='SmartDisplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m380-300 280-180-280-180v360ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayFilled.displayName = 'OnesyIconMaterialSmartDisplayFilled';

export default IconMaterialSmartDisplayFilled;
