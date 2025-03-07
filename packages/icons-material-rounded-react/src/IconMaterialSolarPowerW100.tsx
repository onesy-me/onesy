import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSolarPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerW100'

      short_name='SolarPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M170-800q-6 0-10-4t-4-10q0-6 4-10t10-4h77q6 0 10 4t4 10q0 6-4 10t-10 4h-77Zm29 534-13 66q-3 15 6.5 26.5T217-162h249v-104H199Zm30-355 55-55q4-4 9.5-4t9.5 4q5 4 4.5 10t-4.5 10l-55 55q-4 4-9.5 4t-9.5-4q-5-4-4.5-10t4.5-10Zm-24 327h261v-107H252q-11 0-20 7.5T221-375l-16 81Zm275-385q-59 0-101.5-39T331-814q0-6 4-10t10-4q6 0 10 4t4 10q5 45 39.5 76t81.5 31q47 0 81.5-31t39.5-76q0-6 4-10t10-4q6 0 10 4t4 10q-5 57-47.5 96T480-679Zm0-150Zm-14 305v-77q0-6 4-10t10-4q6 0 10 4t4 10v77q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm28 362h248q15 0 24.5-11.5T773-200l-13-66H494v104Zm0-132h260l-16-81q-2-11-11-18.5t-20-7.5H494v107Zm219-307-56-56q-4-4-3.5-9.5t4.5-9.5q4-4 9-4t9 4l57 55q5 4 5 9.5t-5 10.5q-5 5-10 5t-10-5Zm77-199h-77q-6 0-10-4t-4-10q0-6 4-10t10-4h77q6 0 10 4t4 10q0 6-4 10t-10 4ZM157-206l35-175q5-21 21-34.5t38-13.5h457q22 0 38 13.5t21 34.5l35 175q5 28-12.5 50T743-134H216q-29 0-46.5-22T157-206Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerW100.displayName = 'OnesyIconMaterialSolarPowerW100';

export default IconMaterialSolarPowerW100;
