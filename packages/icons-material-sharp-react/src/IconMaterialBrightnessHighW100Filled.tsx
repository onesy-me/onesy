import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessHighW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessHighW100Filled'

      short_name='BrightnessHigh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100 367.77-212H212v-155.77L100-480l112-112.22V-748h155.77L480-860l112.22 112H748v155.78L860-480 748-367.77V-212H592.22L480-100Zm0-220q66.4 0 113.2-46.8T640-480q0-66.4-46.8-113.2T480-640q-66.4 0-113.2 46.8T320-480q0 66.4 46.8 113.2T480-320Zm0-28q-55 0-93.5-38.5T348-480q0-55 38.5-93.5T480-612q55 0 93.5 38.5T612-480q0 55-38.5 93.5T480-348Z"/>
    </Icon>
  );
});

IconMaterialBrightnessHighW100Filled.displayName = 'OnesyIconMaterialBrightnessHighW100Filled';

export default IconMaterialBrightnessHighW100Filled;
