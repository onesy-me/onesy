import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFilled'

      short_name='Remove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-440v-80h560v80H200Z"/>
    </Icon>
  );
});

IconMaterialRemoveFilled.displayName = 'OnesyIconMaterialRemoveFilled';

export default IconMaterialRemoveFilled;
