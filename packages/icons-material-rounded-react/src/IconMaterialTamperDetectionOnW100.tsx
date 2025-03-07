import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTamperDetectionOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnW100'

      short_name='TamperDetectionOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-276q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h152q14 0 23-9t9-23v-416q0-14-9-23t-23-9H217q-14 0-23 9t-9 23v136q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-136q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84.31-85.24q6.69-6.76 16.19-3.01T803-638v188q0 9.92-9.5 13.46-9.5 3.54-16.19-3.15L693-524v188q0 26-17 43t-43 17H481Zm-261 64q-12 0-22.87-4.88Q186.25-221.75 178-230l-71-71q-2-2-2-3.5t2-3.5q2-4 6-6t9-2q7 0 11.5 1.5t8.5 6.5l29 29v-184q0-6.07 4.5-10.03 4.5-3.97 9.93-3.97 5.88 0 9.72 3.97Q199-469.07 199-463v91h28v-136q0-6.07 4.5-10.03 4.5-3.97 9.93-3.97 5.88 0 9.72 3.97Q255-514.07 255-508v136h28v-116q0-6.07 4.5-10.03 4.5-3.97 9.93-3.97 5.88 0 9.72 3.97Q311-494.07 311-488v116h28v-86q0-6.07 4.5-10.03 4.5-3.97 9.93-3.97 5.88 0 9.72 3.97Q367-464.07 367-458v186q0 24.75-17.25 42.37Q332.5-212 307-212h-87Zm445-572v32-32 480-480Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOnW100.displayName = 'OnesyIconMaterialTamperDetectionOnW100';

export default IconMaterialTamperDetectionOnW100;
