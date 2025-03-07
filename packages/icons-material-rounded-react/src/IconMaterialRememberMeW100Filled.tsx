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
      <path d="M312-92q-24.75 0-42.37-17.63Q252-127.25 252-152v-656q0-24.75 17.63-42.38Q287.25-868 312-868h336q24.75 0 42.38 17.62Q708-832.75 708-808v656q0 24.75-17.62 42.37Q672.75-92 648-92H312Zm168-308q54 0 104.5 14.06T680-346v-400H280v400q45-25.88 95.5-39.94Q426-400 480-400Zm.12-66q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialRememberMeW100Filled.displayName = 'OnesyIconMaterialRememberMeW100Filled';

export default IconMaterialRememberMeW100Filled;
