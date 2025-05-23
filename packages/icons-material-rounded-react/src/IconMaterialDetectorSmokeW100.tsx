import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorSmokeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorSmokeW100'

      short_name='DetectorSmoke'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M490-131q-6-2-8.5-7t-.5-11q11-33 9.5-64.5T470-276q-27-41-29-76t12-80q2-5 7-8t10-1q6 2 8.5 7t.5 11q-11 35-10.5 65t21.5 62q26 41 28.5 76T507-140q-2 5-7 8t-10 1Zm-150 0q-6-2-8.5-7t-.5-11q11-33 9.5-65.5T319-277q-28-38-28.5-75t12.5-80q2-5 7-8t10-1q6 2 8.5 7t.5 11q-11 34-10.5 65.5T341-295q25 38 27 75.5T357-140q-2 5-7 8t-10 1Zm296 0q-6-2-8.5-7t-.5-11q11-32 9.5-65T615-277q-27-38-28-75.5t12-79.5q2-5 7-8t10-1q6 2 8.5 7t.5 11q-11 34-10.5 65t21.5 62q26 41 28.5 76T653-140q-2 5-7 8t-10 1ZM200-760v48q0 14 9 23t23 9h496q14 0 23-9t9-23v-48H200Zm94 108 22 59q4 10 12 15.5t18 5.5h268q10 0 18-5.5t12-15.5l22-59H294Zm52 108q-19 0-34.5-10.5T289-583l-25-69h-32q-25 0-42.5-17.5T172-712v-46q0-13 8.5-21.5T202-788h556q13 0 21.5 8.5T788-758v46q0 25-17.5 42.5T728-652h-32l-27 69q-7 17-22 28t-34 11H346ZM200-760v80-80Z"/>
    </Icon>
  );
});

IconMaterialDetectorSmokeW100.displayName = 'OnesyIconMaterialDetectorSmokeW100';

export default IconMaterialDetectorSmokeW100;
