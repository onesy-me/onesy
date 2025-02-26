import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProblemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProblemW100'

      short_name='Problem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280.07-312q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q268-368 260-359.93t-8 20q0 11.93 8.07 19.93t20 8ZM266-428h28v-220h-28v220Zm160 42h268v-28H426v28Zm0-160h268v-28H426v28ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialProblemW100.displayName = 'OnesyIconMaterialProblemW100';

export default IconMaterialProblemW100;
