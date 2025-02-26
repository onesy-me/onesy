import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoW100Filled'

      short_name='BrightnessAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-320h30l44-108h150l44 108h32L488-680h-14L332-320Zm84-134 62-164h4l64 164H416Zm64 354L368-212H212v-156L100-480l112-112v-156h156l112-112 112 112h156v156l112 112-112 112v156H592L480-100Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoW100Filled.displayName = 'OnesyIconMaterialBrightnessAutoW100Filled';

export default IconMaterialBrightnessAutoW100Filled;
