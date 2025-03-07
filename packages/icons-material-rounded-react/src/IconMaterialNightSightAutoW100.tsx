import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoW100'

      short_name='NightSightAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-174q71 0 131-36.5t99-96.5q-131 3-227.5-81T346-600q0-24 4-48t11-47q-83 28-135 97.5T174-440q0 111 77.5 188.5T440-174Zm0 28q-122 0-208-86t-86-208q0-48 14.5-93t41.5-82.5q27-37.5 64.5-65T350-721q17-5 29.5 7t8.5 29q-5 21-9.5 42t-4.5 43q0 107 78.5 181T640-336q8 1 17 1.5t17-1.5q15-3 24 9t1 26q-43 69-110.5 112T440-146Zm205-467-23 70q-2 5-5 7.5t-8 2.5q-8 0-12-6t-2-13l100-301q2-6 6.5-10t11.5-4h14q7 0 12 4t7 10l99 302q2 7-1.5 12.5T832-533q-5 0-8-2t-5-7l-24-71H645Zm9-28h132l-66-201-66 201ZM437-388Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoW100.displayName = 'OnesyIconMaterialNightSightAutoW100';

export default IconMaterialNightSightAutoW100;
