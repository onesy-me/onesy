import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man4Filled'

      short_name='Man4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-80-80-600h320L560-80H400Zm80-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialMan4Filled.displayName = 'OnesyIconMaterialMan4Filled';

export default IconMaterialMan4Filled;
