import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClimateMiniSplit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplit'

      short_name='ClimateMiniSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-480H160q-33 0-56.5-23.5T80-560v-240q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v240q0 33-23.5 56.5T800-480ZM440-200v-160q0-17 11.5-28.5T480-400q17 0 28.5 11.5T520-360v160q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200Zm360-360H160h640Zm-560 0v-80q0-33 23.5-56.5T320-720h320q33 0 56.5 23.5T720-640v80h-80v-80H320v80h-80Zm-80 0h640v-240H160v240Zm0 360q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280q24 0 46-9t39-26q10-10 17-21.5t12-25.5q5-16 17-27t29-11q15 0 26 10t11 23q0 26-19 58t-37 50q-28 28-64.5 43.5T160-200Zm637 0q17 0 28.5-11.5T837-240q0-17-11.5-28.5T797-280q-24 0-46-9t-39-26q-10-10-17-21.5T683-362q-5-16-17-27t-29-11q-15 0-26 10t-11 23q0 26 19 58t37 50q28 28 64.5 43.5T797-200Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplit.displayName = 'OnesyIconMaterialClimateMiniSplit';

export default IconMaterialClimateMiniSplit;
