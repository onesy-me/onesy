import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewW100Filled'

      short_name='Pageview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-400q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM132-212v-536h696v536h-46L566-428q14-20 18-36t4-36q0-53.33-37.26-90.67Q513.47-628 460.24-628q-53.24 0-90.74 37.26-37.5 37.27-37.5 90.5 0 53.24 37.33 90.74Q406.67-372 460-372q26 0 48-8.5t40-25.5l194 194H132Z"/>
    </Icon>
  );
});

IconMaterialPageviewW100Filled.displayName = 'OnesyIconMaterialPageviewW100Filled';

export default IconMaterialPageviewW100Filled;
