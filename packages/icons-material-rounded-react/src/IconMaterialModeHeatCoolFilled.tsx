import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatCoolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatCoolFilled'

      short_name='ModeHeatCool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M421-681q14 0 26-6t20-17q5-7 14-8.5t17 3.5q23 16 41.5 37t32.5 46q8 14 4 30t-15 27l-78 78-4.5-4.5-4.5-4.5-86-84q-12-11-28-11.5T332-584l-84 84q-20 20-32 45.5T201-402q-2 20-20.5 24.5T153-388q-4-7-7.5-13.5T139-416q-9-22-14-45.5t-5-48.5q0-97 52-164.5T297-794q20-14 41.5-3.5T360-762v21q0 25 17.5 42.5T421-681Zm-61 182 57 55q3 2 5 5t4 5l-92 92q-7 7-16.5 6.5T300-343q-8-7-14-18.5t-6-27.5q0-17 6.5-30t17.5-24l56-56Zm180 175-20 20v184q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-104L324-108q-11 11-28 11t-28-11q-11-11-11-28t11-28l488-488q11-11 28-11t28 11q11 11 11 28t-11 28L696-480h104q17 0 28.5 11.5T840-440q0 17-11.5 28.5T800-400H616l-20 20 60 60h144q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240h-64l56 56q11 11 11 28t-11 28q-11 11-28 11t-28-11l-56-56v64q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120v-144l-60-60Z"/>
    </Icon>
  );
});

IconMaterialModeHeatCoolFilled.displayName = 'OnesyIconMaterialModeHeatCoolFilled';

export default IconMaterialModeHeatCoolFilled;
