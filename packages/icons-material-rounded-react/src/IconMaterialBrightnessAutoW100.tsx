import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoW100'

      short_name='BrightnessAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M406-428h150l40 99q2 5 5.5 7t8.5 2q8 0 12.5-6t1.5-14L490-676q-1-2-2.5-3t-3.5-1h-6q-2 0-3.5 1t-2.5 3L339-339q-3 7 1.5 13t12.5 6q5 0 8-2.5t5-6.5l40-99Zm10-26 62-164h4l64 164H416Zm-48 242h-96q-25 0-42.5-17.5T212-272v-96l-70-70q-9-9-13-20t-4-22q0-11 4-22t13-20l70-70v-96q0-25 17.5-42.5T272-748h96l70-70q9-9 20-13t22-4q11 0 22 4t20 13l70 70h96q25 0 42.5 17.5T748-688v96l70 70q9 9 13 20t4 22q0 11-4 22t-13 20l-70 70v96q0 25-17.5 42.5T688-212h-96l-70 70q-9 9-20 13t-22 4q-11 0-22-4t-20-13l-70-70Zm12-28 77 77q9 9 23 9t23-9l77-77h108q14 0 23-9t9-23v-108l77-77q9-9 9-23t-9-23l-77-77v-108q0-14-9-23t-23-9H580l-77-77q-9-9-23-9t-23 9l-77 77H272q-14 0-23 9t-9 23v108l-77 77q-9 9-9 23t9 23l77 77v108q0 14 9 23t23 9h108Zm100-240Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoW100.displayName = 'OnesyIconMaterialBrightnessAutoW100';

export default IconMaterialBrightnessAutoW100;
