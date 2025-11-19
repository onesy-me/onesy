import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvNextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvNextFilled'

      short_name='TvNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-60-60-60 120-120-120-120 60-60 180 180L780-60Zm-460-60v-80H80v-640h800v360H680v280h-80v80H320Z"/>
    </Icon>
  );
});

IconMaterialTvNextFilled.displayName = 'OnesyIconMaterialTvNextFilled';

export default IconMaterialTvNextFilled;
