import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpacity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Opacity'

      short_name='Opacity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-133 0-226.5-92T160-436q0-65 25-121.5T254-658l226-222 226 222q44 44 69 100.5T800-436q0 132-93.5 224T480-120ZM242-400h474q12-72-13.5-123T650-600L480-768 310-600q-27 26-53 77t-15 123Z"/>
    </Icon>
  );
});

IconMaterialOpacity.displayName = 'OnesyIconMaterialOpacity';

export default IconMaterialOpacity;
