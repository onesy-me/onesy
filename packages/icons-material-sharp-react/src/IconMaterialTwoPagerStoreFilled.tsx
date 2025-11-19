import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTwoPagerStoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoPagerStoreFilled'

      short_name='TwoPagerStore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-80v-120h320v120H560ZM80-160v-640h800v280h-80v-200H520v200h-80v360H80Zm432-80 40-200h336l40 200H512Zm-312-80h200v-80H200v80Zm0-120h200v-80H200v80Zm0-120h200v-80H200v80Zm360 0v-80h200v80H560Z"/>
    </Icon>
  );
});

IconMaterialTwoPagerStoreFilled.displayName = 'OnesyIconMaterialTwoPagerStoreFilled';

export default IconMaterialTwoPagerStoreFilled;
