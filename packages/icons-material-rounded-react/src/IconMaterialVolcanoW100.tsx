import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolcanoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoW100'

      short_name='Volcano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M732-132H252q-32 0-50-27t-4-57l60-136q8-17 22.5-26.5T313-388h82l65-162q7-17 22-27.5t34-10.5h120q20 0 36 12t21 32l96 336q8 29-9.5 52.5T732-132Zm-480-28h480q16 0 25.5-13t4.5-28l-95-336q-3-11-11.5-17t-19.5-6H516q-10 0-18 5.5T486-540l-64 161q-4 8-11.5 13.5T394-360h-81q-10 0-17.5 5T284-341l-61 136q-7 16 2.5 30.5T252-160Zm314-600v-80q0-6 4-10t10-4q6 0 10 4t4 10v80q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm145 49 58-57q4-4 9.5-4t9.5 4q5 4 5 10t-5 10l-58 57q-4 4-9.5 3.5T711-692q-4-4-4-9.5t4-9.5Zm-281 19-58-57q-4-4-4-9.5t4-9.5q4-5 10-5t10 5l57 58q4 4 4 9t-4 9q-4 4-9.5 4t-9.5-4ZM252-160h-29 539-510Z"/>
    </Icon>
  );
});

IconMaterialVolcanoW100.displayName = 'OnesyIconMaterialVolcanoW100';

export default IconMaterialVolcanoW100;
