import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomOutMapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutMapW100Filled'

      short_name='ZoomOutMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-200h126q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H202q-12.75 0-21.37-8.63Q172-189.25 172-202v-144q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v126l140-140q4-4 9.5-4.5T360-360q5 5 5 10t-5 10L220-200Zm520 0L600-340q-4-4-4.5-9.5T600-360q5-5 10-5t10 5l140 140v-126q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v144q0 12.75-8.62 21.37Q770.75-172 758-172H614q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h126ZM200-740v126q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-144q0-12.75 8.63-21.38Q189.25-788 202-788h144q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H220l140 140q4 4 4.5 9.5T360-600q-5 5-10 5t-10-5L200-740Zm560 0L620-600q-4 4-9.5 4.5T600-600q-5-5-5-10t5-10l140-140H614q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h144q12.75 0 21.38 8.62Q788-770.75 788-758v144q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-126Z"/>
    </Icon>
  );
});

IconMaterialZoomOutMapW100Filled.displayName = 'OnesyIconMaterialZoomOutMapW100Filled';

export default IconMaterialZoomOutMapW100Filled;
