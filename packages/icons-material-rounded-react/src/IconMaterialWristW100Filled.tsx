import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWristW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WristW100Filled'

      short_name='Wrist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M264-332H90q-5.95 0-9.97-4.02Q76-340.05 76-346v-268q0-5.95 4.03-9.97Q84.05-628 90-628h154l54-54q12.8-12.63 29.36-19.31Q343.93-708 362-708h388q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H576v95h254q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H576v94h294q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H576v95h214q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H453l26 52q13 26 7.5 54T461-158q-5 5-11 5.5t-11-4.5L264-332Z"/>
    </Icon>
  );
});

IconMaterialWristW100Filled.displayName = 'OnesyIconMaterialWristW100Filled';

export default IconMaterialWristW100Filled;
