import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoFilterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterW100Filled'

      short_name='PhotoFilter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h10.9V5H5v14h14V8.8h.7v10.9Zm7.7-4.65-.95-2.1-2.1-.95 2.1-.95.95-2.1.95 2.1 2.1.95-2.1.95Zm5.2-6.075-.7-1.45-1.45-.7 1.45-.7.7-1.45.7 1.45 1.45.7-1.45.7Z"/>
    </Icon>
  );
});

IconMaterialPhotoFilterW100Filled.displayName = 'OnesyIconMaterialPhotoFilterW100Filled';

export default IconMaterialPhotoFilterW100Filled;
