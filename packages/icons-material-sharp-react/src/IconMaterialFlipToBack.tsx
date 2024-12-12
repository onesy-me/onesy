import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipToBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBack'

      short_name='FlipToBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-560h80v480h480v80H120Zm160-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-480v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0 480v-80h80v80h-80Zm160-480v-80h80v80h-80Zm0 480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialFlipToBack.displayName = 'OnesyIconMaterialFlipToBack';

export default IconMaterialFlipToBack;
