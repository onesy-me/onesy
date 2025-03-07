import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBloodPressure = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodPressure'

      short_name='BloodPressure'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-640v-80q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v180q0 17-11.5 28.5T840-500q-17 0-28.5-11.5T800-540v-180H160v80q0 17-11.5 28.5T120-600q-17 0-28.5-11.5T80-640Zm200 360q-11 0-21-5.5T244-302l-68-138h-55q-17 0-28.5-11.5T81-480q0-17 11.5-28.5T121-520h80q11 0 20.5 6t14.5 16l44 88 124-248q5-10 15-15t21-5q11 0 21 5t15 15l67 134q-18 11-34.5 23T478-474l-38-76-124 248q-5 11-15 16.5t-21 5.5ZM160-160q-33 0-56.5-23.5T80-240v-80q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320v80h215q17 0 28.5 11.5T415-200q0 17-11.5 28.5T375-160H160Zm320-320ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm85-257q6-6 6-14t-6-14q-6-6-14-6t-14 6l-63 62q-6 6-6 14.5t6 14.5q6 6 14.5 6t14.5-6l62-63Z"/>
    </Icon>
  );
});

IconMaterialBloodPressure.displayName = 'OnesyIconMaterialBloodPressure';

export default IconMaterialBloodPressure;
