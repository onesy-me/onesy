import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsBrightnessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessW100Filled'

      short_name='SettingsBrightness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-334 38-38h70v-70l38-38-38-38v-70h-70l-38-38-38 38h-70v70l-38 38 38 38v70h70l38 38Zm0-52v-188q39 0 66.5 27.38t27.5 66.5q0 39.12-27.42 66.62Q519.17-386 480-386ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessW100Filled.displayName = 'OnesyIconMaterialSettingsBrightnessW100Filled';

export default IconMaterialSettingsBrightnessW100Filled;
