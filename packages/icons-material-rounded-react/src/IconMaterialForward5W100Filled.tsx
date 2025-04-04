import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward5W100Filled'

      short_name='Forward5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.06-132Q416-132 360-156t-98-66q-42-42-66-97.94-24-55.95-24-120Q172-504 196-560t66-98q42-42 97.96-66 55.96-24 120.04-24h18l-58-58q-5-5-5-10t4.78-10q5.22-5 10.72-4.5 5.5.5 9.5 4.5l71 70q9 9 9 21t-9 21l-69 70q-5 5-10 5t-10.22-5q-4.78-5-4.28-10.5t4.5-9.5l56-56h-18q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98 0 64.08-24 120.04Q740-264 698-222q-42 42-97.94 66-55.95 24-120 24ZM520-336H410q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h106v-62H410q-6.07 0-10.03-3.97Q396-433.93 396-440v-90q0-6.07 3.97-10.03Q403.93-544 410-544h120q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H424v62h106q6.07 0 10.03 3.97Q544-446.07 544-440v80q0 10.2-6.9 17.1-6.9 6.9-17.1 6.9Z"/>
    </Icon>
  );
});

IconMaterialForward5W100Filled.displayName = 'OnesyIconMaterialForward5W100Filled';

export default IconMaterialForward5W100Filled;
