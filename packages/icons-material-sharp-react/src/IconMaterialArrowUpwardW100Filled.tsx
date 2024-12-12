import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowUpwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardW100Filled'

      short_name='ArrowUpward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-212v-482L232-460l-20-20 268-268 268 268-20 20-234-234v482h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardW100Filled.displayName = 'OnesyIconMaterialArrowUpwardW100Filled';

export default IconMaterialArrowUpwardW100Filled;
