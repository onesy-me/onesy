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
      <path d="M800-560q-17 0-28.5-11.5T760-600q0-17 11.5-28.5T800-640q17 0 28.5 11.5T840-600q0 17-11.5 28.5T800-560ZM400-80v-144L296-120l-56-56 160-160v-64h-64L176-240l-56-56 104-104H80v-80h144L120-584l56-56 160 160h64v-64L240-704l56-56 104 104v-144h80v144l104-104 56 56-160 160v64h320v80H656l104 104-56 56-160-160h-64v64l160 160-56 56-104-104v144h-80Zm360-600v-200h80v200h-80Z"/>
    </Icon>
  );
});

IconMaterialSevereColdFilled.displayName = 'OnesyIconMaterialSevereColdFilled';

export default IconMaterialSevereColdFilled;
