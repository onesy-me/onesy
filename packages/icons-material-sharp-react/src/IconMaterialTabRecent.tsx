import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabRecent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecent'

      short_name='TabRecent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm66-106 28-28-74-74v-112h-40v128l86 86ZM520-560h280v52q22 7 42 16.5t38 22.5v-331H80v640h372q-6-19-9-39t-3-41H160v-480h360v160ZM160-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTabRecent.displayName = 'OnesyIconMaterialTabRecent';

export default IconMaterialTabRecent;
