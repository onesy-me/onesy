import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineWeightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightW100Filled'

      short_name='LineWeight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-250v-14h460v14H250Zm0-94v-28h460v28H250Zm0-108v-40h460v40H250Zm0-122v-136h460v136H250Z"/>
    </Icon>
  );
});

IconMaterialLineWeightW100Filled.displayName = 'OnesyIconMaterialLineWeightW100Filled';

export default IconMaterialLineWeightW100Filled;
