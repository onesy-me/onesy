import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalDistributeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeW100Filled'

      short_name='HorizontalDistribute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-696h40v696h-40Zm314-174v-348h68v348h-68Zm342 174v-696h40v696h-40Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistributeW100Filled.displayName = 'OnesyIconMaterialHorizontalDistributeW100Filled';

export default IconMaterialHorizontalDistributeW100Filled;
