import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsBrightnessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessFilled'

      short_name='SettingsBrightness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m420-320 46 46q6 6 14 6t14-6l46-46h80q8 0 14-6t6-14v-80l46-46q6-6 6-14t-6-14l-46-46v-80q0-8-6-14t-14-6h-80l-46-46q-6-6-14-6t-14 6l-46 46h-80q-8 0-14 6t-6 14v80l-46 46q-6 6-6 14t6 14l46 46v80q0 8 6 14t14 6h80Zm60-40v-240q50 0 85 35t35 85q0 50-35 85t-85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessFilled.displayName = 'OnesyIconMaterialSettingsBrightnessFilled';

export default IconMaterialSettingsBrightnessFilled;
