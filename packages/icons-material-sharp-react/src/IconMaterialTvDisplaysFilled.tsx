import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvDisplaysFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvDisplaysFilled'

      short_name='TvDisplays'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-320v-560h640v80H160v480H80ZM440-80v-80H240v-560h680v560H720v80H440Z"/>
    </Icon>
  );
});

IconMaterialTvDisplaysFilled.displayName = 'OnesyIconMaterialTvDisplaysFilled';

export default IconMaterialTvDisplaysFilled;
