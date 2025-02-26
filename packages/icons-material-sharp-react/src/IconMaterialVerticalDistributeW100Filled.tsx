import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalDistributeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeW100Filled'

      short_name='VerticalDistribute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-40h696v40H132Zm174-314v-68h348v68H306ZM132-788v-40h696v40H132Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistributeW100Filled.displayName = 'OnesyIconMaterialVerticalDistributeW100Filled';

export default IconMaterialVerticalDistributeW100Filled;
