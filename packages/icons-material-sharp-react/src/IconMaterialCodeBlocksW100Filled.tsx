import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeBlocksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeBlocksW100Filled'

      short_name='CodeBlocks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-372 20-20-88-88 87-87-20-20-107 107 108 108Zm192 0 108-108-108-108-20 20 88 88-88 88 20 20ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialCodeBlocksW100Filled.displayName = 'OnesyIconMaterialCodeBlocksW100Filled';

export default IconMaterialCodeBlocksW100Filled;
