import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSevereColdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SevereColdFilled'

      short_name='SevereCold'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-560q-17 0-28.5-11.5T760-600q0-17 11.5-28.5T800-640q17 0 28.5 11.5T840-600q0 17-11.5 28.5T800-560ZM400-224l-77 77q-11 11-27.5 11T268-148q-12-11-12-27.5t12-28.5l132-132v-64h-64L203-267q-11 11-27.5 11T148-268q-12-11-12-27.5t12-28.5l76-76H119q-17 0-28-11.5T80-440q0-17 11.5-28.5T120-480h104l-77-76q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l132 132h64v-64L267-676q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l76 76v-104q0-17 11.5-28.5T440-800q17 0 28.5 11.5T480-760v104l76-76q11-11 27.5-11t28.5 11q11 12 11 28.5T612-676L480-544v64h280q17 0 28.5 11.5T800-440q0 17-11.5 28.5T760-400H656l76 77q11 11 11 27.5T732-268q-12 12-28.5 12T676-268L544-400h-64v64l132 133q11 11 11 27.5T612-148q-12 12-28.5 12T556-148l-76-76v105q0 17-11.5 28T440-80q-17 0-28.5-11.5T400-120v-104Zm400-456q-17 0-28.5-11.5T760-720v-120q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840v121q0 17-11.5 28T800-680Z"/>
    </Icon>
  );
});

IconMaterialSevereColdFilled.displayName = 'OnesyIconMaterialSevereColdFilled';

export default IconMaterialSevereColdFilled;
