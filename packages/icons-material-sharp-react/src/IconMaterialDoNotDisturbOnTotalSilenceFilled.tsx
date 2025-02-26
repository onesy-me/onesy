import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotDisturbOnTotalSilenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOnTotalSilenceFilled'

      short_name='DoNotDisturbOnTotalSilence'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM360-440v-80h240v80H360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOnTotalSilenceFilled.displayName = 'OnesyIconMaterialDoNotDisturbOnTotalSilenceFilled';

export default IconMaterialDoNotDisturbOnTotalSilenceFilled;
