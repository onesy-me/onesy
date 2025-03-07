import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mouse'

      short_name='Mouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-116 0-198-82t-82-198v-240q0-116 82-198t198-82q116 0 198 82t82 198v240q0 116-82 198T480-80Zm40-520h160q0-72-45.5-127T520-796v196Zm-240 0h160v-196q-69 14-114.5 69T280-600Zm200 440q83 0 141.5-58.5T680-360v-160H280v160q0 83 58.5 141.5T480-160Zm0-360Zm40-80Zm-80 0Zm40 80Z"/>
    </Icon>
  );
});

IconMaterialMouse.displayName = 'OnesyIconMaterialMouse';

export default IconMaterialMouse;
