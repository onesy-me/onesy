import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddRoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoad'

      short_name='AddRoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-480v-280q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v280q0 17-11.5 28.5T760-440q-17 0-28.5-11.5T720-480ZM160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160q-17 0-28.5-11.5T160-200Zm280-480v-80q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v80q0 17-11.5 28.5T480-640q-17 0-28.5-11.5T440-680Zm0 240v-80q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520v80q0 17-11.5 28.5T480-400q-17 0-28.5-11.5T440-440Zm0 240v-80q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v80q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200Zm280 40h-80q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h80v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80h80q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160h-80v80q0 17-11.5 28.5T760-40q-17 0-28.5-11.5T720-80v-80Z"/>
    </Icon>
  );
});

IconMaterialAddRoad.displayName = 'OnesyIconMaterialAddRoad';

export default IconMaterialAddRoad;
