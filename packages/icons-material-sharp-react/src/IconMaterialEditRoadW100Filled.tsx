import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditRoadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoadW100Filled'

      short_name='EditRoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-499v-249h28v221l-28 28ZM212-212v-536h28v536h-28Zm214-427v-109h28v109h-28Zm0 213v-109h28v109h-28Zm0 214v-109h28v109h-28Zm146 0v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialEditRoadW100Filled.displayName = 'OnesyIconMaterialEditRoadW100Filled';

export default IconMaterialEditRoadW100Filled;
