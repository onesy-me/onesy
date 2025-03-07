import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddTaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTaskW100Filled'

      short_name='AddTask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q132-407.65 132-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q407.79-828 480-828q53 0 102 15.5t93 44.5q6 4 8 10t-2 11q-4 5-10.5 5.5T659-745q-40-27-85.5-41T480-800q-134 0-227 93t-93 227q0 134 93 227t227 93q33.18 0 65.09-6.5Q577-173 607-186q6-2 12.5-1t9.68 6.17q2.82 4.83 1.02 10.72-1.8 5.9-8.2 8.11-34 15-69.5 22.5T480-132Zm306-174H680q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H814v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Zm-364-66 376-376q4-4 9.5-4.5T818-748q5 5 5 10t-5 10L443-353q-9 9-21 9t-21-9L298-456q-4-4-4.5-9.5T298-476q5-5 10-5t10 5l104 104Z"/>
    </Icon>
  );
});

IconMaterialAddTaskW100Filled.displayName = 'OnesyIconMaterialAddTaskW100Filled';

export default IconMaterialAddTaskW100Filled;
