import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountCircleOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleOffW100Filled'

      short_name='AccountCircleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q57 0 109.5-19.5T685-235l-73-73q-32-13-64.5-19.5T480-334q-62 0-119.5 21.5T252-256q45 46 104 71t124 25Zm372 92L706-214q-48 40-105.5 61T480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-62 20.5-119.5T214-705L90-830l20-20L872-88l-20 20Zm-76-227L566-505q14-16 21-35t7-40q0-48-33-81t-81-33q-21 0-40 7t-35 21L295-776q42-26 89-39t96-13q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 49-13 96t-39 89Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleOffW100Filled.displayName = 'OnesyIconMaterialAccountCircleOffW100Filled';

export default IconMaterialAccountCircleOffW100Filled;
