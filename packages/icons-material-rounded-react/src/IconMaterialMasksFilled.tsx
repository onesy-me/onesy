import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMasksFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MasksFilled'

      short_name='Masks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q-38 0-73.5-10.5T341-281q-44-3-90-19t-84-53q-38-37-62.5-97T80-600v-20q0-42 29-71t71-29q39 0 67.5 27t31.5 65q28-8 50-20t45-23q23-12 48-20.5t58-8.5q34 0 58.5 8.5T586-671q22 11 44.5 23t50.5 20q3-39 31.5-65.5T780-720q42 0 71 29t29 71v20q0 90-24.5 150T793-353q-38 37-84 53t-90 19q-30 20-65.5 30.5T480-240ZM260-361q-19-30-29.5-65.5T220-500v-120q0-17-11.5-28.5T180-660q-17 0-28.5 11.5T140-620v20q0 110 37 164t83 75Zm220-199q15 0 26.5 5.5T532-541q8 5 15.5 9t16.5 9q8 4 16 .5t12-11.5q4-8 0-15t-12-11q-8-4-14.5-7.5T552-575q-16-10-32.5-17.5T480-600q-23 0-39.5 7.5T407-575q-7 4-13.5 7.5T379-560q-8 4-11.5 11t.5 15q4 8 12 11t16-1q9-5 16.5-9t15.5-8q14-8 25.5-13.5T480-560Zm220 199q46-21 83-75t37-164v-20q0-17-11.5-28.5T780-660q-17 0-28.5 11.5T740-620v120q0 38-10 73.5T700-361Z"/>
    </Icon>
  );
});

IconMaterialMasksFilled.displayName = 'OnesyIconMaterialMasksFilled';

export default IconMaterialMasksFilled;
