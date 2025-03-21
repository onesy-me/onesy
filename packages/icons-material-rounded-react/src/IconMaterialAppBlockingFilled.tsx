import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppBlockingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlockingFilled'

      short_name='AppBlocking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-60q12 0 23.5-3t22.5-9L632-526q-6 11-9 22.5t-3 23.5q0 42 29 71t71 29Zm88-54q6-11 9-22.5t3-23.5q0-42-29-71t-71-29q-12 0-23.5 3t-22.5 9l134 134ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v120q0 17-11.5 28.5T720-680q-17 0-28.5-11.5T680-720H280v480h400q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240v120q0 33-23.5 56.5T680-40H280Z"/>
    </Icon>
  );
});

IconMaterialAppBlockingFilled.displayName = 'OnesyIconMaterialAppBlockingFilled';

export default IconMaterialAppBlockingFilled;
