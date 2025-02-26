import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectMoveUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveUpW100Filled'

      short_name='TextSelectMoveUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm294-134v-283l-90 89-20-20 124-124 124 124-20 20-90-89v283h-28ZM172-760v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveUpW100Filled.displayName = 'OnesyIconMaterialTextSelectMoveUpW100Filled';

export default IconMaterialTextSelectMoveUpW100Filled;
