import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperBoardOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOff'

      short_name='DeveloperBoardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M4,19V6.83l2,2V12h3.17l1,1H6v4h5v-3.17l1,1V17h2.17l2,2H4z M16,13.17V11h-2.17l-1-1H16V7h-4v2.17l-1-1V7 H9.83l-2-2H18v10.17L16,13.17z" opacity=".3"/><path d="M7.83,5H18v10.17L19.83,17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V5c0-1.1-0.9-2-2-2H5.83L7.83,5z M12,9.17V7h4v3h-3.17L12,9.17z M9.83,7H11v1.17L9.83,7z M13.83,11H16v2.17L13.83,11z M18,21c0.06,0,0.11,0,0.16-0.01l2.32,2.32l1.41-1.41L2.1,2.1L0.69,3.51 l1.32,1.32C2,4.89,2,4.94,2,5v14c0,1.1,0.9,2,2,2H18z M4,19V6.83l2,2V12h3.17l1,1H6v4h5v-3.17l1,1V17h2.17l2,2H4z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOff.displayName = 'OnesyIconMaterialDeveloperBoardOff';

export default IconMaterialDeveloperBoardOff;
