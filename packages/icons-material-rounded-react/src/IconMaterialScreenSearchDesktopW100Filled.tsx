import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenSearchDesktopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktopW100Filled'

      short_name='ScreenSearchDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-438q21 0 35.5-5.5T528-460l92 92q4 4 9.5 4.5T640-368q5-5 5-10t-5-10l-92-92q11-17 15.5-31t4.5-35q0-45-31.5-76.5T460-654q-45 0-76.5 31.5T352-546q0 45 31.5 76.5T460-438Zm0-28q-33 0-56.5-23.5T380-546q0-33 23.5-56.5T460-626q33 0 56.5 23.5T540-546q0 33-23.5 56.5T460-466ZM94-200q-6 0-10-4t-4-10q0-6 4-10t10-4h772q6 0 10 4t4 10q0 6-4 10t-10 4H94Zm98-68q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h576q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialScreenSearchDesktopW100Filled.displayName = 'OnesyIconMaterialScreenSearchDesktopW100Filled';

export default IconMaterialScreenSearchDesktopW100Filled;
