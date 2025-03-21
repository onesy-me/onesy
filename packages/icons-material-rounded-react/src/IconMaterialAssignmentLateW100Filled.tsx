import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentLateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentLateW100Filled'

      short_name='AssignmentLate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-306q8.5 0 14.25-5.75T500-326q0-8.5-5.75-14.25T480-346q-8.5 0-14.25 5.75T460-326q0 8.5 5.75 14.25T480-306Zm.04-106q5.96 0 9.96-4.02 4-4.03 4-9.98v-216q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v216q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h194q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h194q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm248-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialAssignmentLateW100Filled.displayName = 'OnesyIconMaterialAssignmentLateW100Filled';

export default IconMaterialAssignmentLateW100Filled;
