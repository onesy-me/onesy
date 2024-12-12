import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsLadderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadderFilled'

      short_name='ToolsLadder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m188-120 200-720h80l-34 120h225l33-120h80L572-120h-80l34-120H301l-33 120h-80Zm191-400h224l33-120H412l-33 120Zm-55 200h224l33-120H357l-33 120Z"/>
    </Icon>
  );
});

IconMaterialToolsLadderFilled.displayName = 'OnesyIconMaterialToolsLadderFilled';

export default IconMaterialToolsLadderFilled;
