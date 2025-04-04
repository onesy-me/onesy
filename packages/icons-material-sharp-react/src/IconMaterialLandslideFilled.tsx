import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandslideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideFilled'

      short_name='Landslide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-170l160 52 441-147L880-80H80Zm160-202L80-336v-74l160 52 276-92 102 41-378 127Zm500-118 180-80v-160l-180-40-100 80v120l100 80Zm-500-42L80-496v-144h240l103 137-183 61Zm240-198 200-80v-200l-200-40-120 80v160l120 80Z"/>
    </Icon>
  );
});

IconMaterialLandslideFilled.displayName = 'OnesyIconMaterialLandslideFilled';

export default IconMaterialLandslideFilled;
