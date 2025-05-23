import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvgPace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgPace'

      short_name='AvgPace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M610-760q-21 0-35.5-14.5T560-810q0-21 14.5-35.5T610-860q21 0 35.5 14.5T660-810q0 21-14.5 35.5T610-760Zm0 660q-21 0-35.5-14.5T560-150q0-21 14.5-35.5T610-200q21 0 35.5 14.5T660-150q0 21-14.5 35.5T610-100Zm160-520q-21 0-35.5-14.5T720-670q0-21 14.5-35.5T770-720q21 0 35.5 14.5T820-670q0 21-14.5 35.5T770-620Zm0 380q-21 0-35.5-14.5T720-290q0-21 14.5-35.5T770-340q21 0 35.5 14.5T820-290q0 21-14.5 35.5T770-240Zm60-190q-21 0-35.5-14.5T780-480q0-21 14.5-35.5T830-530q21 0 35.5 14.5T880-480q0 21-14.5 35.5T830-430ZM80-480q0-157 104.5-270T441-878q16-2 27.5 9.5T480-840q0 16-10.5 28T443-798q-121 14-202 104t-81 214q0 125 81 214.5T443-162q16 2 26.5 14t10.5 28q0 17-11.5 28.5T441-82Q288-97 184-210T80-480Zm400 80q-33 0-56.5-23.5T400-480q0-5 .5-10.5T403-501l-55-55q-11-11-11-28t11-28q11-11 28-11t28 11l55 55q4-1 21-3 33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialAvgPace.displayName = 'OnesyIconMaterialAvgPace';

export default IconMaterialAvgPace;
