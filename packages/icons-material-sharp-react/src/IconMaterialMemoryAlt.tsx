import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMemoryAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryAlt'

      short_name='MemoryAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h80v-240h-80v240Zm200 0h80v-240h-80v240Zm200 0h80v-240h-80v240Zm-480 80h640v-400H160v400Zm0 0v-400 400Zm40 160v-80H80v-560h120v-80h80v80h160v-80h80v80h160v-80h80v80h120v560H760v80h-80v-80H520v80h-80v-80H280v80h-80Z"/>
    </Icon>
  );
});

IconMaterialMemoryAlt.displayName = 'OnesyIconMaterialMemoryAlt';

export default IconMaterialMemoryAlt;
