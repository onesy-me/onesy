import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetTvW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvW100'

      short_name='ResetTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-172q-12.75 0-21.37-8.63Q372-189.25 372-202v-50H192q-24.75 0-42.37-17.63Q132-287.25 132-312v-416q0-24.75 17.63-42.38Q167.25-788 192-788h576q24.75 0 42.38 17.62Q828-752.75 828-728v100q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-100q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h576q14 0 23-9t9-23v-162q0-14-9-23t-23-9H450l90 90q4 4 4.5 9.5T540-396q-5 5-10 5t-10-5L417-499q-9-9-9-21t9-21l103-103q4-4 9.5-4.5T540-644q5 5 5 10t-5 10l-90 90h318q26 0 43 17t17 43v162q0 24.75-17.62 42.37Q792.75-252 768-252H588v50q0 12.75-8.62 21.37Q570.75-172 558-172H402Zm92-348Z"/>
    </Icon>
  );
});

IconMaterialResetTvW100.displayName = 'OnesyIconMaterialResetTvW100';

export default IconMaterialResetTvW100;
