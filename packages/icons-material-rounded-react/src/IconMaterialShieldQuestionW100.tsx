import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldQuestionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldQuestionW100'

      short_name='ShieldQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Zm-1.93 175q8.93 0 15.43-6.57t6.5-15.5q0-8.93-6.57-15.43t-15.5-6.5q-8.93 0-15.43 6.57t-6.5 15.5q0 8.93 6.57 15.43t15.5 6.5ZM481-417q5.03 0 9.02-4 3.98-4 4.98-9 2-7 4.5-13t6.14-10.88Q512-462 518.5-469.5 525-477 532-484q17-18 30.5-38.69Q576-543.37 576-568q0-37-28.2-61.5T482-654q-28.28 0-52.14 13T391-605q-3 5-1.07 10.3 1.93 5.29 7.07 7.7 5 2 10.5.5t9.5-6.5q11-16 27.78-24.5Q461.57-626 482-626q26.4 0 46.2 16 19.8 16 19.8 42 0 19.93-11.74 36.93-11.73 17-26.26 31.07-9 8-16.5 17T479-463q-5 8-9 15t-4 16q0 6.29 4.25 10.65Q474.5-417 481-417Z"/>
    </Icon>
  );
});

IconMaterialShieldQuestionW100.displayName = 'OnesyIconMaterialShieldQuestionW100';

export default IconMaterialShieldQuestionW100;
