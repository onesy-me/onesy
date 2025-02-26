import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial30fpsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsW100'

      short_name='30fps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M126-246v-28h240v-192H126v-28h240v-192H126v-28h268v220l-14 14 14 14v220H126Zm428-28h252v-412H554v412Zm-28 28v-468h308v468H526Z"/>
    </Icon>
  );
});

IconMaterial30fpsW100.displayName = 'OnesyIconMaterial30fpsW100';

export default IconMaterial30fpsW100;
