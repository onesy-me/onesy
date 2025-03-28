import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneEnabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledW100Filled'

      short_name='PhoneEnabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M215-172q-18 0-30.5-12T172-214v-78q0-17 10.5-30t27.5-17l68-14q15-2 26.5 1t21.5 14l83 85q51-28 93-59t78-67q34-35 64.5-74.5T701-540l-85-77q-10-8-14-21t-1-30l18-82q5-17 17.5-27.5T666-788h80q18 0 30 12.5t12 30.5q0 94-49.5 195T601-360q-89 89-190.5 138.5T215-172Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledW100Filled.displayName = 'OnesyIconMaterialPhoneEnabledW100Filled';

export default IconMaterialPhoneEnabledW100Filled;
