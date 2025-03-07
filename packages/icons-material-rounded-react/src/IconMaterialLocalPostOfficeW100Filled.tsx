import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPostOfficeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeW100Filled'

      short_name='LocalPostOffice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-132q-11 0-19.5-8.5T132-160v-240q0-11 8.5-19.5T160-428h132v-212q0-78.33 54.83-133.17Q401.67-828 480-828h160q78.33 0 133.17 54.83Q828-718.33 828-640v494q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H588v92q0 11-8.5 19.5T560-132H160Zm200-154L181-388q-7-4-14 .19-7 4.18-7 12.09 0 3.72 1.87 6.88 1.86 3.16 5.13 4.84l178 102q6.68 4 14.84 4t15.16-4l178-102q3.27-1.78 5.13-5.11Q560-372.44 560-376q0-7.77-7-11.89-7-4.11-14-.11L360-286Zm228 6h212v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v212h240q11 0 19.5 8.5T588-400v120ZM440-586q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H440Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeW100Filled.displayName = 'OnesyIconMaterialLocalPostOfficeW100Filled';

export default IconMaterialLocalPostOfficeW100Filled;
