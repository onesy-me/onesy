import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileMap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileMap'

      short_name='FileMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-520q-76 0-134 53t-58 144q0 73 57 144t108 116q6 5 13 7.5t14 2.5q7 0 14-2.5t13-7.5q51-45 108-116t57-144q0-91-58-144t-134-53Zm0 250q-21 0-35.5-14.5T430-520q0-21 14.5-35.5T480-570q21 0 35.5 14.5T530-520q0 21-14.5 35.5T480-470ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialFileMap.displayName = 'OnesyIconMaterialFileMap';

export default IconMaterialFileMap;
