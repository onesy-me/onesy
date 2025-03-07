import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoW100'

      short_name='BrightnessAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-320h30l44-108h150l44 108h32L488-680h-14L332-320Zm84-134 62-164h4l64 164H416Zm64 354L368-212H212v-156L100-480l112-112v-156h156l112-112 112 112h156v156l112 112-112 112v156H592L480-100Zm0-40 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoW100.displayName = 'OnesyIconMaterialBrightnessAutoW100';

export default IconMaterialBrightnessAutoW100;
