import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsLadder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadder'

      short_name='ToolsLadder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M238-120q-19 0-30-15.5t-6-33.5l178-643q4-13 14-20.5t23-7.5q20 0 31 15.5t6 33.5l-20 71h225l25-92q4-13 14.5-20.5T722-840q19 0 30 15.5t6 33.5L580-148q-4 13-14 20.5t-23 7.5q-20 0-31-15.5t-6-33.5l20-71H301l-25 92q-4 13-14.5 20.5T238-120Zm141-400h224l33-120H412l-33 120Zm-55 200h224l33-120H357l-33 120Z"/>
    </Icon>
  );
});

IconMaterialToolsLadder.displayName = 'OnesyIconMaterialToolsLadder';

export default IconMaterialToolsLadder;
