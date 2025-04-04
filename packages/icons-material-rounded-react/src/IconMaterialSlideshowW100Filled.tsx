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
      <path d="M586-467q7-5 7-13t-7-13L423-597q-8-5-15.5-1t-7.5 13v210q0 9 7.5 13t15.5-1l163-104ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialSlideshowW100Filled.displayName = 'OnesyIconMaterialSlideshowW100Filled';

export default IconMaterialSlideshowW100Filled;
