import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOphthalmologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OphthalmologyW100'

      short_name='Ophthalmology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M147-546v-28h81q29-74 92.5-121T464-748l-58-58 20-20 65 68q5 5 6.5 12t-.5 13q-2 6-7 10t-12 4q-85 0-144.5 48.5T253-558l-4 12H147Zm462 66q0-42 20-78.5t52-50.5q-26-39-58-63.5T550-709l8-27q51 15 87.5 44t65.5 79q36 6 61 44t25 89q0 46-22.5 84T711-346q-26 47-65 77.5T556-223l-8-27q42-13 75.5-38t57.5-63q-27-13-49.5-48.5T609-480Zm94 106q25 0 45.5-33t20.5-73q0-42-20-74t-46-32q-26 0-46 32t-20 74q0 40 20.5 73t45.5 33ZM428-134l-20-20 58-58q-80-6-143.5-53T230-386h-81v-28h102l4 12q21 64 80.5 112.5T480-241q7 0 12 4t7 10q2 6 .5 13t-6.5 12l-65 68Zm275-346Z"/>
    </Icon>
  );
});

IconMaterialOphthalmologyW100.displayName = 'OnesyIconMaterialOphthalmologyW100';

export default IconMaterialOphthalmologyW100;
