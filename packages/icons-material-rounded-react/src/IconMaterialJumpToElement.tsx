import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJumpToElement = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JumpToElement'

      short_name='JumpToElement'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-520h40q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440h-80q-17 0-28.5-11.5T440-480v-80q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560v40Zm280 0v-40q0-17 11.5-28.5T840-600q17 0 28.5 11.5T880-560v80q0 17-11.5 28.5T840-440h-80q-17 0-28.5-11.5T720-480q0-17 11.5-28.5T760-520h40ZM520-800v40q0 17-11.5 28.5T480-720q-17 0-28.5-11.5T440-760v-80q0-17 11.5-28.5T480-880h80q17 0 28.5 11.5T600-840q0 17-11.5 28.5T560-800h-40Zm280 0h-40q-17 0-28.5-11.5T720-840q0-17 11.5-28.5T760-880h80q17 0 28.5 11.5T880-840v80q0 17-11.5 28.5T840-720q-17 0-28.5-11.5T800-760v-40ZM360-304 164-108q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196H160q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400v240q0 17-11.5 28.5T400-120q-17 0-28.5-11.5T360-160v-144Z"/>
    </Icon>
  );
});

IconMaterialJumpToElement.displayName = 'OnesyIconMaterialJumpToElement';

export default IconMaterialJumpToElement;
