import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastW100Filled'

      short_name='Cast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-64q26 0 45 19t19 45h-64Zm164 0q0-67-48-114.5T132-376v-28q80 0 136 55.89 56 55.88 56 136.11h-28Zm148 0q0-64.81-24.5-121.4-24.5-56.6-67-99.1-42.5-42.5-99.1-67Q196.81-524 132-524v-28q71 0 132.66 26.59t107.91 72.84q46.25 46.25 72.84 107.91Q472-283 472-212h-28Zm128 0q0-91-34.48-171.18t-94.5-140Q383-583 302.98-617.5 222.97-652 132-652v-96h696v536H572Z"/>
    </Icon>
  );
});

IconMaterialCastW100Filled.displayName = 'OnesyIconMaterialCastW100Filled';

export default IconMaterialCastW100Filled;
