import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentIndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentIndW100Filled'

      short_name='AssignmentInd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h194q-10-30 7-55t47-25q30 0 47 25t7 55h194q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Zm0 344q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33ZM222-200h516q11-6 15-11.5t7-14.5q-54-53-125.5-83.5T480-340q-83 0-154.5 30.5T200-226q3 9 7 14.5t15 11.5Z"/>
    </Icon>
  );
});

IconMaterialAssignmentIndW100Filled.displayName = 'OnesyIconMaterialAssignmentIndW100Filled';

export default IconMaterialAssignmentIndW100Filled;
