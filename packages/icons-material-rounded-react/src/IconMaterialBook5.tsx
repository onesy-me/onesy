import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBook5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book5'

      short_name='Book5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-80q-45 0-77.5-30.5T160-186v-558q0-38 23.5-68t61.5-38l300-59q37-8 66 16t29 62v477q0 29-18 51.5T576-275l-315 63q-9 2-15 9.5t-6 16.5q0 11 9 18.5t21 7.5h450v-600q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v600q0 33-23.5 56.5T720-80H270Zm90-233 200-39v-478l-200 39v478Zm-80 16v-478l-15 3q-11 2-18 9.5t-7 18.5v457q5-2 10.5-3.5T261-293l19-4Zm-40-475v485-485Z"/>
    </Icon>
  );
});

IconMaterialBook5.displayName = 'OnesyIconMaterialBook5';

export default IconMaterialBook5;
