import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountChildFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountChildFilled'

      short_name='AccountChild'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880Zm-80 200q0 33 23.5 56.5T480-600q33 0 56.5-23.5T560-680q0-33-23.5-56.5T480-760q-33 0-56.5 23.5T400-680Zm80 120q-66 0-123 21.5T300-460v160q0 57 57 77.5T480-202q17 0 28.5-11.5T520-242q0-17-11.5-28.5T480-282q-20 2-39-2t-38-12q-11-5-14-15.5t4-18.5q17-17 40-23.5t47-6.5q37 0 68.5 13t31.5 45v34q0 12 8.5 21t20.5 9q23 0 37-19t14-43v-160q0-57-57-78.5T480-560Zm0 180q-21 0-35.5-14.5T430-430q0-21 14.5-35.5T480-480q21 0 35.5 14.5T530-430q0 21-14.5 35.5T480-380Z"/>
    </Icon>
  );
});

IconMaterialAccountChildFilled.displayName = 'OnesyIconMaterialAccountChildFilled';

export default IconMaterialAccountChildFilled;
