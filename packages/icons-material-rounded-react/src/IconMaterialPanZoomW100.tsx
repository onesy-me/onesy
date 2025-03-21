import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanZoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanZoomW100'

      short_name='PanZoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-200h126q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H202q-12.75 0-21.37-8.63Q172-189.25 172-202v-144q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v126l140-140q4-4 9.5-4.5T360-360q5 5 5 10t-5 10L220-200Zm540-540L620-600q-4 4-9.5 4.5T600-600q-5-5-5-10t5-10l140-140H614q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h144q12.75 0 21.38 8.62Q788-770.75 788-758v144q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-126Z"/>
    </Icon>
  );
});

IconMaterialPanZoomW100.displayName = 'OnesyIconMaterialPanZoomW100';

export default IconMaterialPanZoomW100;
