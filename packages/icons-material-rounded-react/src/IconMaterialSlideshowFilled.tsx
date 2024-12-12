import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSlideshowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowFilled'

      short_name='Slideshow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M634-463q9-6 9-17t-9-17L411-640q-10-7-20.5-1T380-623v286q0 12 10.5 18t20.5-1l223-143ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialSlideshowFilled.displayName = 'OnesyIconMaterialSlideshowFilled';

export default IconMaterialSlideshowFilled;
