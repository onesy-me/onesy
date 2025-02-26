import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSpaceEvenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceEvenW100Filled'

      short_name='AlignSpaceEven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-800v-28h696v28H132Zm0 668v-28h696v28H132Zm174-454v-68h348v68H306Zm0 280v-68h348v68H306Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceEvenW100Filled.displayName = 'OnesyIconMaterialAlignSpaceEvenW100Filled';

export default IconMaterialAlignSpaceEvenW100Filled;
