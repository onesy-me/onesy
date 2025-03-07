import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBook4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book4W100'

      short_name='Book4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-132q-33.33 0-56.67-23.33Q172-178.67 172-212v-536q0-33.33 23.33-56.67Q218.67-828 252-828h348q24.75 0 42.38 17.62Q660-792.75 660-768v448q0 24.75-17.62 42.37Q624.75-260 600-260H252q-21 0-36.5 14.32-15.5 14.33-15.5 35.5 0 21.18 15.5 35.68T252-160h476q14 0 23-9t9-23v-542q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v542q0 24.75-17.62 42.37Q752.75-132 728-132H252Zm76-156h272q14 0 23-9t9-23v-448q0-14-9-23t-23-9H328v512Zm-28 0v-512h-48q-22.1 0-37.05 15.5Q200-769 200-748v479q11-8 23.98-13.5Q236.97-288 252-288h48ZM200-800v531-531Z"/>
    </Icon>
  );
});

IconMaterialBook4W100.displayName = 'OnesyIconMaterialBook4W100';

export default IconMaterialBook4W100;
