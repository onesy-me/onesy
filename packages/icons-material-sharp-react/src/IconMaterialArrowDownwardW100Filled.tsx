import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDownwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardW100Filled'

      short_name='ArrowDownward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-748v482L232-500l-20 20 268 268 268-268-20-20-234 234v-482h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardW100Filled.displayName = 'OnesyIconMaterialArrowDownwardW100Filled';

export default IconMaterialArrowDownwardW100Filled;
