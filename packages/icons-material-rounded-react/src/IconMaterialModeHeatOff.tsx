import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatOff'

      short_name='ModeHeatOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-509Zm0 0Zm0 0ZM763-84 83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM561-588q-62 0-107.5-41T401-730h-.5.5q-13 11-30.5 10T342-733q-11-12-11-28.5t13-27.5q18-16 33-26.5t36-24.5q22-14 44.5-1t22.5 39v54q0 34 23.5 57t57.5 23q18 0 33.5-8t27.5-22q8-10 19.5-12t22.5 5q63 45 99.5 115T800-440q0 15-1.5 29t-3.5 28q-3 16-17.5 24.5T747-355q-8-2-14-7t-10-12q-4-7-5.5-15t-.5-16q2-9 2.5-17.5t.5-17.5q0-50-18.5-94.5T648-614q-20 13-42 19.5t-45 6.5Zm-81 468q-134 0-227-93t-93-227q0-69 25.5-134.5T259-700l57 57q-38 50-57 101t-19 102q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l103-100 57 57-104 100q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6.5-29T536-331l46-46 143 143q-45 53-107.5 83.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialModeHeatOff.displayName = 'OnesyIconMaterialModeHeatOff';

export default IconMaterialModeHeatOff;
