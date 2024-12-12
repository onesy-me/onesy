import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReorder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reorder'

      short_name='Reorder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialReorder.displayName = 'OnesyIconMaterialReorder';

export default IconMaterialReorder;
