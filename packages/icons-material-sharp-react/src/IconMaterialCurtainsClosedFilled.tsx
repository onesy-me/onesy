import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurtainsClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosedFilled'

      short_name='CurtainsClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h80v-640h640v640h80v80H80Zm360-80h80v-560h-80v560Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosedFilled.displayName = 'OnesyIconMaterialCurtainsClosedFilled';

export default IconMaterialCurtainsClosedFilled;
