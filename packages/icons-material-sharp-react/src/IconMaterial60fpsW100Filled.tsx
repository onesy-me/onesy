import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial60fpsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsW100Filled'

      short_name='60fps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M126-246v-468h228v28H154v172h240v268H126Zm28-28h212v-212H154v212Zm400 0h252v-412H554v412Zm-28 28v-468h308v468H526Z"/>
    </Icon>
  );
});

IconMaterial60fpsW100Filled.displayName = 'OnesyIconMaterial60fpsW100Filled';

export default IconMaterial60fpsW100Filled;
