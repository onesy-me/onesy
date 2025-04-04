import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhysicalTherapy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhysicalTherapy'

      short_name='PhysicalTherapy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-276Zm90 190-189-74H160q-17 0-28.5-11.5T120-200v-120q0-83 58.5-141.5T320-520h429q38 0 64.5 26t26.5 64q0 31-19 55.5T773-342l-93 27v155q0 21-9.5 38T645-94q-16 11-35 13.5T571-86Zm-83-194H375q-7 0-10.5 4t-4.5 9q-1 5 1.5 9.5t8.5 6.5l230 91v-120H488Zm-288 40h84q-2-6-3-12t-1-13q0-39 28-67t67-28h163l214-59q5-2 7-5t1-7q-1-4-3.5-6.5T749-440H320q-50 0-85 35t-35 85v80Zm281-36Zm-81-284q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T480-720q0-33-23.5-56.5T400-800q-33 0-56.5 23.5T320-720q0 33 23.5 56.5T400-640Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialPhysicalTherapy.displayName = 'OnesyIconMaterialPhysicalTherapy';

export default IconMaterialPhysicalTherapy;
