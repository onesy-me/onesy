import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentReturnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnW100'

      short_name='AssignmentReturn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M410-466h180q6 0 10-4t4-10q0-6-4-10t-10-4H410l80-80q4-4 4.5-9.5T490-594q-5-5-10-5t-10 5l-93 93q-9 9-9 21t9 21l93 93q4 4 9.5 4.5T490-366q5-5 5-10t-5-10l-80-80ZM232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h194q-11-29 6-54.5t48-25.5q32 0 49 25.5t5 54.5h194q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm248-580q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnW100.displayName = 'OnesyIconMaterialAssignmentReturnW100';

export default IconMaterialAssignmentReturnW100;
