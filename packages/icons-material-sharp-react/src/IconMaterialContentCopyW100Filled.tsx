import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyW100Filled'

      short_name='ContentCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-292v-536h416v536H306ZM198-184v-504h28v476h356v28H198Z"/>
    </Icon>
  );
});

IconMaterialContentCopyW100Filled.displayName = 'OnesyIconMaterialContentCopyW100Filled';

export default IconMaterialContentCopyW100Filled;
