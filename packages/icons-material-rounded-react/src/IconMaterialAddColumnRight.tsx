import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddColumnRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnRight'

      short_name='AddColumnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-760H160v560h240v-560ZM160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v40q0 17-11.5 28.5T760-680q-17 0-28.5-11.5T720-720v-40H480v560h240v-40q0-17 11.5-28.5T760-280q17 0 28.5 11.5T800-240v40q0 33-23.5 56.5T720-120H160Zm600-240q-17 0-28.5-11.5T720-400v-40h-40q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520h40v-40q0-17 11.5-28.5T760-600q17 0 28.5 11.5T800-560v40h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v40q0 17-11.5 28.5T760-360ZM480-480Zm-80 0h80-80Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialAddColumnRight.displayName = 'OnesyIconMaterialAddColumnRight';

export default IconMaterialAddColumnRight;
