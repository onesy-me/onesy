import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowW100Filled'

      short_name='Window'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-466h294v234q0 24.75-17.62 42.37Q752.75-172 728-172H494v-294Zm0-28v-294h234q24.75 0 42.38 17.62Q788-752.75 788-728v234H494Zm-28 0H172v-234q0-24.75 17.63-42.38Q207.25-788 232-788h234v294Zm0 28v294H232q-24.75 0-42.37-17.63Q172-207.25 172-232v-234h294Z"/>
    </Icon>
  );
});

IconMaterialWindowW100Filled.displayName = 'OnesyIconMaterialWindowW100Filled';

export default IconMaterialWindowW100Filled;
