import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFanIndirect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FanIndirect'

      short_name='FanIndirect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 340-220l56-56 44 43v-247h80v247l43-43 57 56L480-80ZM180-200 40-340l140-140 56 57-43 43h87v-220h80v300H193l43 44-56 56Zm600 0-57-56 44-44H600v-300h80v220h87l-44-43 57-57 140 140-140 140ZM80-492v-348h800v348l-80-80v-188H160v188l-80 80Z"/>
    </Icon>
  );
});

IconMaterialFanIndirect.displayName = 'OnesyIconMaterialFanIndirect';

export default IconMaterialFanIndirect;
