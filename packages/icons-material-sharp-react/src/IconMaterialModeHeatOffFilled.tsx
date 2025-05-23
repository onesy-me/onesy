import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatOffFilled'

      short_name='ModeHeatOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-55 658-188l-62-62q-10 38-42 64t-74 26q-50 0-85-34.5T360-278q0-23 9-44.5t26-38.5l46-44-57-57-45 45q-29 29-44 64t-15 75q0 32 9.5 60.5T316-165q-70-42-113-114.5T160-440q0-55 14.5-103t38.5-90L55-791l57-57 736 736-57 57Zm-21-249L314-760q62-59 114-89.5l52-30.5v132q0 37 25 58.5t56 21.5q17 0 32.5-7t28.5-23l18-22q72 42 116 116.5T800-440q0 37-8 71t-22 65Z"/>
    </Icon>
  );
});

IconMaterialModeHeatOffFilled.displayName = 'OnesyIconMaterialModeHeatOffFilled';

export default IconMaterialModeHeatOffFilled;
