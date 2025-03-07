import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataObjectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObjectW100'

      short_name='DataObject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M602-212q-6 0-10-4t-4-10q0-6 4-10t10-4h51q27 0 47-18.5t20-45.5v-86q0-32 20-56t51-32v-4q-31-8-51-32t-20-56v-86q0-27-20-45.5T653-720h-51q-6 0-10-4t-4-10q0-6 4-10t10-4h51q39 0 67 27t28 65v86q0 28 20.5 47t49.5 19q5 0 7.5 3t2.5 7v28q0 4-2.5 7t-7.5 3q-29 0-49.5 19T748-390v86q0 38-28 65t-67 27h-51Zm-295 0q-39 0-67-27t-28-65v-86q0-28-20.5-47T142-456q-4 0-7-3t-3-7v-28q0-4 3-7t7-3q29 0 49.5-19t20.5-47v-86q0-38 28-65t67-27h52q6 0 10 4t4 10q0 6-4 10t-10 4h-52q-27 0-47 18.5T240-656v86q0 32-20 56t-51 32v4q31 8 51 32t20 56v86q0 27 20 45.5t47 18.5h52q6 0 10 4t4 10q0 6-4 10t-10 4h-52Z"/>
    </Icon>
  );
});

IconMaterialDataObjectW100.displayName = 'OnesyIconMaterialDataObjectW100';

export default IconMaterialDataObjectW100;
