import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeBlocksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeBlocksW100'

      short_name='CodeBlocks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-372 20-20-88-88 87-87-20-20-107 107 108 108Zm192 0 108-108-108-108-20 20 88 88-88 88 20 20ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCodeBlocksW100.displayName = 'OnesyIconMaterialCodeBlocksW100';

export default IconMaterialCodeBlocksW100;
