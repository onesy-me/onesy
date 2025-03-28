import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneEnabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledW100'

      short_name='PhoneEnabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M215-172q-18.43 0-30.71-12Q172-196 172-214v-78q0-17 10.5-30t27.5-17l68-14q15-2 26.5 1t21.5 14l83 85q51-28 93-59t78-67q34-35 64.5-74.5T701-540l-85-77q-10-8-14-21t-1-30l18-82q5-17 17.5-27.5T666-788h80q18 0 30 12.29 12 12.28 12 30.71 0 94-49.5 195t-138 190q-88.5 89-190 138.5T215-172Zm499-394q21-47 33.5-93t12.5-87q0-6-4-10t-10-4h-80q-8 0-13 4t-7 12l-18 82q-2 6-.5 13t6.5 11l80 72ZM382-240l-78-80q-5-5-9.5-6.5t-10.5.5l-68 14q-8 2-12 7t-4 13v78q0 6 4 10t10 4q32 0 79.5-9.5T382-240Zm332-326ZM382-240Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledW100.displayName = 'OnesyIconMaterialPhoneEnabledW100';

export default IconMaterialPhoneEnabledW100;
