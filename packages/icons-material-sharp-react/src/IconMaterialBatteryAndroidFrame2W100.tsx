import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrame2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrame2W100'

      short_name='BatteryAndroidFrame2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-380v-200h108v200H180Zm-88 88v-376h696v376H92Zm28-28h640v-320H120v320Zm708-80v-159h40v159h-40Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrame2W100.displayName = 'OnesyIconMaterialBatteryAndroidFrame2W100';

export default IconMaterialBatteryAndroidFrame2W100;
