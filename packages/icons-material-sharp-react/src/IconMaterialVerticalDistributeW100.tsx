import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalDistributeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeW100'

      short_name='VerticalDistribute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-40h696v40H132Zm174-314v-68h348v68H306ZM132-788v-40h696v40H132Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistributeW100.displayName = 'OnesyIconMaterialVerticalDistributeW100';

export default IconMaterialVerticalDistributeW100;
