import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentReturnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnW100Filled'

      short_name='AssignmentReturn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M410-466h180q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H410l80-80q4-4 4.5-9.5t-4.72-10.72Q485-599 480-599q-5 0-10 5l-93 93q-9 9-9 21t9 21l93 93q4 4 9.5 4.5t10.72-4.72Q495-371 495-376q0-5-5-10l-80-80ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h194q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h194q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm248-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnW100Filled.displayName = 'OnesyIconMaterialAssignmentReturnW100Filled';

export default IconMaterialAssignmentReturnW100Filled;
