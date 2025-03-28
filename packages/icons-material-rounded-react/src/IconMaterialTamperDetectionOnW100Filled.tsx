import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTamperDetectionOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnW100Filled'

      short_name='TamperDetectionOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-212q-12 0-22.87-4.88Q186.25-221.75 178-230l-71-71q-2-2-2-3.5t2-3.5q2-4 6-6t9-2q7 0 11.5 1.5t8.5 6.5l29 29v-184q0-6.07 4.5-10.03 4.5-3.97 9.93-3.97 5.88 0 9.72 3.97Q199-469.07 199-463v91h28v-136q0-6.07 4.5-10.03 4.5-3.97 9.93-3.97 5.88 0 9.72 3.97Q255-514.07 255-508v136h28v-116q0-6.07 4.5-10.03 4.5-3.97 9.93-3.97 5.88 0 9.72 3.97Q311-494.07 311-488v116h28v-86q0-6.07 4.5-10.03 4.5-3.97 9.93-3.97 5.88 0 9.72 3.97Q367-464.07 367-458v186q0 24.75-17.25 42.37Q332.5-212 307-212h-87Zm277-64q-12.75 0-21.37-8.5-8.63-8.49-8.63-21.06V-542q0-24.75-17.62-42.38Q431.75-602 407-602H187q-12.75 0-21.37-8.63Q157-619.25 157-632v-120q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84.31-84.31q6.69-6.69 16.19-3.15 9.5 3.54 9.5 13.46v188q0 9.92-9.5 13.46-9.5 3.54-16.19-3.15L693-524v188q0 26-17 43t-43 17H497Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOnW100Filled.displayName = 'OnesyIconMaterialTamperDetectionOnW100Filled';

export default IconMaterialTamperDetectionOnW100Filled;
