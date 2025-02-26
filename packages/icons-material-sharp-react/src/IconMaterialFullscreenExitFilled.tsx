import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullscreenExitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitFilled'

      short_name='FullscreenExit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z"/>
    </Icon>
  );
});

IconMaterialFullscreenExitFilled.displayName = 'OnesyIconMaterialFullscreenExitFilled';

export default IconMaterialFullscreenExitFilled;
