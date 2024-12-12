import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipToFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontFilled'

      short_name='FlipToFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-560h560v560H280Zm80-80h400v-400H360v400ZM120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 480v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontFilled.displayName = 'OnesyIconMaterialFlipToFrontFilled';

export default IconMaterialFlipToFrontFilled;
