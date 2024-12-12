import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipFilled'

      short_name='Flip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-760v-80h80v80h-80Zm0 640v-80h80v80h-80Zm160-640v-80h80v80h-80Zm0 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM360-120H120v-720h240v80H200v560h160v80Zm80 80v-880h80v880h-80Z"/>
    </Icon>
  );
});

IconMaterialFlipFilled.displayName = 'OnesyIconMaterialFlipFilled';

export default IconMaterialFlipFilled;
