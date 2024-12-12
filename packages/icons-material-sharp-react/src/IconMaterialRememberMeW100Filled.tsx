import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRememberMeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeW100Filled'

      short_name='RememberMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v776H252Zm228-308q54 0 104.5 14.06T680-346v-400H280v400q45-25.88 95.5-39.94Q426-400 480-400Zm.12-66q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialRememberMeW100Filled.displayName = 'OnesyIconMaterialRememberMeW100Filled';

export default IconMaterialRememberMeW100Filled;
