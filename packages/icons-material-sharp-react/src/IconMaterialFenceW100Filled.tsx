import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceW100Filled'

      short_name='Fence'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-186v-160h-28v-28h28v-132h-28v-28h28v-135l94-94 80 80 81-80 80 80 80-80 94 94v135h27v28h-27v132h27v28h-27v160H226Zm28-348h132v-124l-66-66-66 66v124Zm160 0h132v-124l-66-66-66 66v124Zm161 0h131v-124l-66-66-65 66v124ZM254-374h132v-132H254v132Zm160 0h132v-132H414v132Zm161 0h131v-132H575v132ZM254-214h132v-132H254v132Zm160 0h132v-132H414v132Zm161 0h131v-132H575v132Z"/>
    </Icon>
  );
});

IconMaterialFenceW100Filled.displayName = 'OnesyIconMaterialFenceW100Filled';

export default IconMaterialFenceW100Filled;
