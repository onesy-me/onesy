import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentReturnedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnedW100Filled'

      short_name='AssignmentReturned'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m466-412-80-78q-5-4-10-4.5t-10.22 4.72Q361-485 361-480q0 5 5 10l93 93q9 9 21 9t21-9l93-93q4-4 4.5-9.5t-4.2-10.2q-4.3-4.3-9.8-4.3-5.5 0-10.5 4l-80 78v-178q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v178ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h194q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h194q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm248-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnedW100Filled.displayName = 'OnesyIconMaterialAssignmentReturnedW100Filled';

export default IconMaterialAssignmentReturnedW100Filled;
