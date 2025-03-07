import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatCool = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatCool'

      short_name='ModeHeatCool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M353-566Zm0 0Zm-56-228q20-14 41.5-3.5T360-762v21q0 25 18 42.5t43 17.5q14 0 26-6t20-17q5-7 14-8.5t17 3.5q26 17 45 40.5t33 50.5q8 15 2 30t-21 23q-15 8-30.5 2.5T503-583q-5-10-9.5-17.5T482-616q-14 8-29.5 11.5T421-601q-44 0-79.5-24.5T290-691q-38 37-64 82.5T200-510q0 31 11 58.5t30 48.5q2-20 11.5-37.5T276-472l56-56q11-11 27.5-11t28.5 11l38 37q12 12 12 28.5T426-434q-11 11-27.5 11.5T370-433l-10-10-28 28q-5 5-8.5 11.5T320-389q0 5 1 8.5t3 7.5q6 14 2.5 28T312-320q-20 20-47 19.5T216-318q-15-11-28-25t-24-29q-21-29-32.5-64.5T120-510q0-97 52-164.5T297-794Zm243 470-20 20v184q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-104L324-108q-11 11-28 11t-28-11q-11-11-11-28t11-28l488-488q11-11 28-11t28 11q11 11 11 28t-11 28L696-480h104q17 0 28.5 11.5T840-440q0 17-11.5 28.5T800-400H616l-20 20 60 60h144q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240h-64l56 56q11 11 11 28t-11 28q-11 11-28 11t-28-11l-56-56v64q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120v-144l-60-60Z"/>
    </Icon>
  );
});

IconMaterialModeHeatCool.displayName = 'OnesyIconMaterialModeHeatCool';

export default IconMaterialModeHeatCool;
