import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsLevelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLevelFilled'

      short_name='ToolsLevel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280q-33 0-56.5-23.5T80-360v-240q0-33 23.5-56.5T160-680h640q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H160Zm220-200h60v-120h-60q-24 0-42 18t-18 42q0 24 18 42t42 18Zm140 0h60q24 0 42-18t18-42q0-24-18-42t-42-18h-60v120Z"/>
    </Icon>
  );
});

IconMaterialToolsLevelFilled.displayName = 'OnesyIconMaterialToolsLevelFilled';

export default IconMaterialToolsLevelFilled;
