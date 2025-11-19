import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvNext = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvNext'

      short_name='TvNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-60-60-60 120-120-120-120 60-60 180 180L780-60Zm-460-60v-80H80v-640h800v360h-80v-280H160v480h520v80h-80v80H320ZM160-280v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTvNext.displayName = 'OnesyIconMaterialTvNext';

export default IconMaterialTvNext;
