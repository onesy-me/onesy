import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutorenewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutorenewW100Filled'

      short_name='Autorenew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M211-362q-12-27-18.5-56.5T186-478q0-123 86-209.5T480-774h70l-90-90 20-20 124 124-124 124-20-20 90-90h-70q-111 0-188.5 78T214-478q0 23 4.5 47.5T232-383l-21 21ZM480-76 356-200l124-124 20 20-90 90h70q111 0 188.5-78T746-482q0-23-4.5-47.5T728-577l21-21q12 27 18.5 56.5T774-482q0 123-86 209.5T480-186h-70l90 90-20 20Z"/>
    </Icon>
  );
});

IconMaterialAutorenewW100Filled.displayName = 'OnesyIconMaterialAutorenewW100Filled';

export default IconMaterialAutorenewW100Filled;
