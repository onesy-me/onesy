import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOxygenSaturation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturation'

      short_name='OxygenSaturation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-21 0-39.5-10.5T251-120h-91q-50 0-85-35t-35-85v-120q0-17 11.5-28.5T80-400q17 0 28.5 11.5T120-360v120q0 17 11.5 28.5T160-200h91q11-19 29.5-29.5T320-240h40v-40q0-17 11.5-28.5T400-320q17 0 28.5 11.5T440-280v40h80v-40q0-17 11.5-28.5T560-320q17 0 28.5 11.5T600-280v40h40q21 0 39.5 10.5T709-200h91q17 0 28.5-11.5T840-240v-120q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v120q0 50-35 85t-85 35h-91q-11 19-29.5 29.5T640-80H320ZM120-600q0-66 47-113t113-47h40v-120q0-17 11.5-28.5T360-920q17 0 28.5 11.5T400-880v120q0 33-23.5 56.5T320-680h-40q-33 0-56.5 23.5T200-600q0 27 16 47.5t40 28.5q16 5 22.5 20.5t.5 31.5q-6 15-20.5 21.5T228-449q-47-17-77.5-57.5T120-600Zm720 0q0 53-30.5 93.5T732-449q-16 5-30.5-1.5T681-472q-6-16 .5-31.5T704-524q24-8 40-28.5t16-47.5q0-33-23.5-56.5T680-680h-40q-33 0-56.5-23.5T560-760v-120q0-17 11.5-28.5T600-920q17 0 28.5 11.5T640-880v120h40q66 0 113 47t47 113ZM480-400Zm-11 0q-44 0-79.5-25.5T340-493q-3-10-11-17t-18-9q-16-4-24.5-18t-4.5-30q4-16 18-25t30-5q30 8 53 28.5t33 50.5q5 17 20 27.5t33 10.5h22q18 0 33-10.5t20-27.5q10-30 33-50.5t53-28.5q16-4 30 5t18 25q4 16-4.5 30T649-519q-10 2-18 9t-11 17q-14 42-49.5 67.5T491-400h-22Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturation.displayName = 'OnesyIconMaterialOxygenSaturation';

export default IconMaterialOxygenSaturation;
