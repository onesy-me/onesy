import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Road'

      short_name='Road'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-17 0-28.5-11.5T160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160Zm280 0q-17 0-28.5-11.5T440-200v-80q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v80q0 17-11.5 28.5T480-160Zm280 0q-17 0-28.5-11.5T720-200v-560q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v560q0 17-11.5 28.5T760-160ZM480-400q-17 0-28.5-11.5T440-440v-80q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520v80q0 17-11.5 28.5T480-400Zm0-240q-17 0-28.5-11.5T440-680v-80q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v80q0 17-11.5 28.5T480-640Z"/>
    </Icon>
  );
});

IconMaterialRoad.displayName = 'OnesyIconMaterialRoad';

export default IconMaterialRoad;
