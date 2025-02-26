import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackgroundGridSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundGridSmall'

      short_name='BackgroundGridSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM200-680h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialBackgroundGridSmall.displayName = 'OnesyIconMaterialBackgroundGridSmall';

export default IconMaterialBackgroundGridSmall;
