import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoutineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoutineW100'

      short_name='Routine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M414-414q-40-40-71.5-86T288-598q-17 27-25 56.5t-8 61.5q0 93.84 65.58 159.42Q386.16-255 480-255q31 0 61.5-8.5T598-288q-52-23-98-54.5T414-414Zm20-19q46 46 102 81t119 57q-35 33-80 51t-94 18q-106.14 0-180.07-73.93Q227-373.86 227-480q0-49 18-94t51-80q22 63 57 119t81 102Zm281 52q-7.12-2.06-14.06-4.53T687-390q9-21 14-44t5-45.64q0-93.94-66.21-160.15Q573.58-706 479.64-706 457-706 434-701.5T390-688q-2-7-4.06-13.22-2.06-6.23-3.94-12.78 23-10 48-15t51-5q106.14 0 180.07 73.93Q735-586.14 735-480q0 26-5 51t-15 48ZM466-826v-88h28v88h-28Zm0 780v-88h28v88h-28Zm269-669-20-20 60-60 20 20-60 60ZM185-165l-20-20 60-60 20 20-60 60Zm641-301v-28h88v28h-88Zm-780 0v-28h88v28H46Zm729 301-60-60 20-20 60 60-20 20ZM225-715l-60-60 20-20 60 60-20 20Zm189 301Z"/>
    </Icon>
  );
});

IconMaterialRoutineW100.displayName = 'OnesyIconMaterialRoutineW100';

export default IconMaterialRoutineW100;
