import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignCenterW100'

      short_name='AlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-466v-28h696v28H132Zm174-120v-68h348v68H306Zm0 280v-68h348v68H306Z"/>
    </Icon>
  );
});

IconMaterialAlignCenterW100.displayName = 'OnesyIconMaterialAlignCenterW100';

export default IconMaterialAlignCenterW100;
