import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMemoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryFilled'

      short_name='Memory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-360v-240h240v240H360Zm0 240v-80H200v-160h-80v-80h80v-80h-80v-80h80v-160h160v-80h80v80h80v-80h80v80h160v160h80v80h-80v80h80v80h-80v160H600v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400Z"/>
    </Icon>
  );
});

IconMaterialMemoryFilled.displayName = 'OnesyIconMaterialMemoryFilled';

export default IconMaterialMemoryFilled;
