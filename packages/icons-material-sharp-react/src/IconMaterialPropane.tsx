import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPropane = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Propane'

      short_name='Propane'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm200-160Zm-80-240h160v-40H400v40ZM280-120v-120q-100 0-170-70T40-480q0-100 70-170t170-70h40v-120h320v120h40q100 0 170 70t70 170q0 100-70 170t-170 70v120h-80v-120H360v120h-80Z"/>
    </Icon>
  );
});

IconMaterialPropane.displayName = 'OnesyIconMaterialPropane';

export default IconMaterialPropane;
