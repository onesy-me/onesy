import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClearAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllFilled'

      short_name='ClearAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"/>
    </Icon>
  );
});

IconMaterialClearAllFilled.displayName = 'OnesyIconMaterialClearAllFilled';

export default IconMaterialClearAllFilled;
