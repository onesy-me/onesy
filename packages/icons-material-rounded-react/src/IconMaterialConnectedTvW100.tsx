import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConnectedTvW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTvW100'

      short_name='ConnectedTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-252q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 12.75-8.62 21.37Q570.75-172 558-172H402q-12.75 0-21.37-8.63Q372-189.25 372-202v-50H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Zm79.86-56q10.14 0 17.14-6.86t7-17q0-10.14-6.86-17.14t-17-7Q230-384 223-377.14t-7 17q0 10.14 6.86 17.14t17 7Zm254.29 0q5.85 0 9.85-4.1 4-4.11 4-9.9 0-115.59-81.2-196.8Q345.59-628 230-628q-5.79 0-9.9 4.15-4.1 4.14-4.1 10 0 5.85 4.1 9.85 4.11 4 9.9 4 104.08 0 177.04 72.96T480-350q0 5.79 4.15 9.9 4.14 4.1 10 4.1Zm-122 0q5.85 0 9.85-4.1 4-4.11 4-9.9 0-64.77-45.61-110.39Q294.77-506 230-506q-5.79 0-9.9 4.15-4.1 4.14-4.1 10 0 5.85 4.1 9.85 4.11 4 9.9 4 54 0 91 37t37 91q0 5.79 4.15 9.9 4.14 4.1 10 4.1Z"/>
    </Icon>
  );
});

IconMaterialConnectedTvW100.displayName = 'OnesyIconMaterialConnectedTvW100';

export default IconMaterialConnectedTvW100;
