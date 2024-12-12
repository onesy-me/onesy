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
      <path d="m480-260 60-60h100v-100l60-60-60-60v-100H540l-60-60-60 60H320v100l-60 60 60 60v100h100l60 60Zm0-100v-240q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessFilled.displayName = 'OnesyIconMaterialSettingsBrightnessFilled';

export default IconMaterialSettingsBrightnessFilled;
