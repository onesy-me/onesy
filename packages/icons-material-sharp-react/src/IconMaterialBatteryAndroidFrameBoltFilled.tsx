import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrameBoltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrameBoltFilled'

      short_name='BatteryAndroidFrameBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-240v-480h682l-64 80H120v320h513l-15 80H40Zm667-40 28-160H600l192-240h21l-28 160h135L728-280h-21Zm-547-80v-240h466L434-360H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrameBoltFilled.displayName = 'OnesyIconMaterialBatteryAndroidFrameBoltFilled';

export default IconMaterialBatteryAndroidFrameBoltFilled;
