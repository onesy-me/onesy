import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSlideshowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowW100Filled'

      short_name='Slideshow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-348 206-132-206-132v264ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialSlideshowW100Filled.displayName = 'OnesyIconMaterialSlideshowW100Filled';

export default IconMaterialSlideshowW100Filled;
