import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplay5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay5W100Filled'

      short_name='Replay5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-336H410q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h106v-62H410q-6.07 0-10.03-3.97Q396-433.93 396-440v-90q0-6.07 3.97-10.03Q403.93-544 410-544h120q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H424v62h106q6.07 0 10.03 3.97Q544-446.07 544-440v80q0 10.2-6.9 17.1-6.9 6.9-17.1 6.9Zm-39.94 204Q416-132 360-156t-98-66q-42-42-66-97.96-24-55.96-24-120.04 0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98 0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-18l56 56q4 4 4.5 9.5t-4.28 10.5q-5.22 5-10.22 5-5 0-10-5l-69-70q-9-9-9-21t9-21l71-70q4-4 9.5-4.5t10.72 4.5q4.78 5 4.78 10t-5 10l-58 58h18q64.08 0 120.04 24Q656-700 698-658q42 42 66 97.94 24 55.95 24 120Q788-376 764-320t-66 98q-42 42-97.94 66-55.95 24-120 24Z"/>
    </Icon>
  );
});

IconMaterialReplay5W100Filled.displayName = 'OnesyIconMaterialReplay5W100Filled';

export default IconMaterialReplay5W100Filled;
