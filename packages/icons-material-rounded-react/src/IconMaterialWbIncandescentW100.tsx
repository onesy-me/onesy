import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbIncandescentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIncandescentW100'

      short_name='WbIncandescent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-120v-78q0-6 4-10t10-4q6 0 10 4t4 10v78q0 6-4 10t-10 4q-6 0-10-4t-4-10ZM120-494h78q6 0 10 4t4 10q0 6-4 10t-10 4h-78q-6 0-10-4t-4-10q0-6 4-10t10-4Zm642 0h78q6 0 10 4t4 10q0 6-4 10t-10 4h-78q-6 0-10-4t-4-10q0-6 4-10t10-4Zm-50 286-54-54q-4-4-4.5-9.5T658-282q5-5 10-5t10 5l54 54q4 4 4.5 9.5T732-208q-5 5-10 5t-10-5Zm-484-20 54-54q4-4 9.5-4.5T302-282q5 5 5 10t-5 10l-54 54q-4 4-9.5 4.5T228-208q-5-5-5-10t5-10Zm252-104q-62 0-105-43t-43-105q0-42 21.5-77t58.5-55v-110q0-13 8.5-21.5T442-752h76q13 0 21.5 8.5T548-722v110q37 20 58.5 55t21.5 77q0 62-43 105t-105 43Zm-40-290q10-3 19.5-4.5T480-628q11 0 20.5 1.5T520-622v-102h-80v102Zm40 262q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialWbIncandescentW100.displayName = 'OnesyIconMaterialWbIncandescentW100';

export default IconMaterialWbIncandescentW100;
