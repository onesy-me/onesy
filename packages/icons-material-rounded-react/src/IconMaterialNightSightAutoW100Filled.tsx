import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoW100Filled'

      short_name='NightSightAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-146q-122 0-208-86t-86-208q0-48 14.5-93t41-82q26.5-37 64.5-63.5t84-38.5q18-5 30.5 9.5T385-676q-8 18-9.5 37t-1.5 39q0 111 77.5 188.5T640-334h16q8 0 16-2 14-3 22.5 8.5T697-303q-35 74-105 115.5T440-146Zm205-467-23 70q-2 5-5 7.5t-8 2.5q-8 0-12-6t-2-13l100-301q2-6 6.5-10t11.5-4h14q7 0 12 4t7 10l99 302q2 7-1.5 12.5T832-533q-5 0-8-2t-5-7l-24-71H645Zm9-28h132l-66-201-66 201Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoW100Filled.displayName = 'OnesyIconMaterialNightSightAutoW100Filled';

export default IconMaterialNightSightAutoW100Filled;
