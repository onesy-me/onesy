import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallDesktopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallDesktopW100Filled'

      short_name='InstallDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-202v-50H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h270q6 0 10 4t4 10q0 6-4 10t-10 4H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h576q12 0 22-10t10-22v-48q0-6 4-10t10-4q6 0 10 4t4 10v48q0 26-17 43t-43 17H588v50q0 13-8.5 21.5T558-172H402q-13 0-21.5-8.5T372-202Zm286-289v-283q0-6 4-10t10-4q6 0 10 4t4 10v283l122-122q4-4 9-3.5t9 4.5q4 4 4 9.5t-4 9.5L693-460q-9 9-21 9t-21-9L517-594q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l121 122Z"/>
    </Icon>
  );
});

IconMaterialInstallDesktopW100Filled.displayName = 'OnesyIconMaterialInstallDesktopW100Filled';

export default IconMaterialInstallDesktopW100Filled;
