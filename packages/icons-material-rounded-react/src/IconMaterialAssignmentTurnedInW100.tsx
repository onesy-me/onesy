import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentTurnedInW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedInW100'

      short_name='AssignmentTurnedIn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M422-392 318-496q-4-4-9.5-4.5T298-496q-5 5-5 10t5 10l103 103q9 9 21 9t21-9l217-217q4-4 4.5-9.5T660-610q-5-5-10-5t-10 5L422-392ZM232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h194q-11-29 6-54.5t48-25.5q32 0 49 25.5t5 54.5h194q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm248-580q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedInW100.displayName = 'OnesyIconMaterialAssignmentTurnedInW100';

export default IconMaterialAssignmentTurnedInW100;
