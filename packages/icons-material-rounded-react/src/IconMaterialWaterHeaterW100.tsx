import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterHeaterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterHeaterW100'

      short_name='WaterHeater'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-515q0 29 13.5 54t37.5 40q-2-4-2.5-8t-.5-9q0-13 5-24.5t15-21.5l46-46 47 46q10 10 14.5 21.5T546-438q0 5-.5 9t-2.5 8q24-15 37.5-40t13.5-54q0-24-8.5-45T560-598q-9 6-19.5 9.5T519-585q-29 0-51.5-19.5T442-653q-18 15-32.5 32t-24 34.5Q376-569 371-551t-5 36Zm114 25-27 26q-5 5-8 11.5t-3 14.5q0 16 11 26.5t27 10.5q16 0 27-10.5t11-26.5q0-8-3-14.5t-8-11.5l-27-26Zm-10-216v45q0 20 14.5 34t34.5 14q9 0 16.5-3t14.5-10l8-9q30 19 47 51.5t17 68.5q0 60-41 101t-101 41q-60 0-101-41t-41-101q0-55 35.5-105.5T470-706ZM246-106q-25 0-42.5-17.5T186-166v-554q0-56 39-95t95-39h320q56 0 95 39t39 95v554q0 25-17.5 42.5T714-106H246Zm-32-160v100q0 14 9 23t23 9h468q14 0 23-9t9-23v-100q-60 0-80.5 20T600-226q-46 0-62.5-20T480-266q-41 0-57.5 20T360-226q-45 0-64-20t-82-20Zm146 12q41 0 57.5-20t62.5-20q47 0 64.5 20t55.5 20q37 0 57.5-20t88.5-20v-426q0-44-31-75t-75-31H320q-44 0-75 31t-31 75v426q67 0 86.5 20t59.5 20Z"/>
    </Icon>
  );
});

IconMaterialWaterHeaterW100.displayName = 'OnesyIconMaterialWaterHeaterW100';

export default IconMaterialWaterHeaterW100;
