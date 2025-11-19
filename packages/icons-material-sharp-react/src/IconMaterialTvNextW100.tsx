import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvNextW100'

      short_name='TvNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-100-20-20 120-120-120-120 20-20 140 140-140 140Zm-408-72v-80H132v-536h696v308h-28v-280H160v480h520v28h-92v80H372ZM160-280v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTvNextW100.displayName = 'OnesyIconMaterialTvNextW100';

export default IconMaterialTvNextW100;
