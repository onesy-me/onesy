import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenSearchDesktopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktopW100'

      short_name='ScreenSearchDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m630-358 20-20-102-102q11-17 15.5-31t4.5-35q0-45-31.5-76.5T460-654q-45 0-76.5 31.5T352-546q0 45 31.5 76.5T460-438q21 0 35.5-5.5T528-460l102 102ZM460-466q-33 0-56.5-23.5T380-546q0-33 23.5-56.5T460-626q33 0 56.5 23.5T540-546q0 33-23.5 56.5T460-466ZM80-200v-28h800v28H80Zm52-68v-496h696v496H132Zm28-28h640v-440H160v440Zm0 0v-440 440Z"/>
    </Icon>
  );
});

IconMaterialScreenSearchDesktopW100.displayName = 'OnesyIconMaterialScreenSearchDesktopW100';

export default IconMaterialScreenSearchDesktopW100;
