import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragClickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragClickW100Filled'

      short_name='DragClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-291q-61 0-110.5-35.5T301-421q-2-5 1.5-10t8.5-7q6-2 11 1t7 9q17 49 58.5 79t92.5 30q66 0 113-47t47-113q0-52-30-93.5T530-631q-6-2-8.5-7.5T521-649q2-5 6.5-8t9.5-1q59 19 95 68.5T668-479q0 78-55 133t-133 55Zm0 160q-144 0-246-101.5T132-477q0-6 4.5-10t10.5-4q6 0 10 4t4 10q0 127 95.5 222.5T480-159q134 0 227-93t93-227q0-133-93.5-227T482-799q-6 0-10-4.5t-4-10.5q0-6 4-10t10-4q71 0 134 27.5t110 75q47 47.5 74.5 111T828-479q0 72-27.5 135.5T726-233q-47 47-110.5 74.5T480-131Zm-32-353L265-668l-18 55q-4 11-15 11t-14-11l-48-160q-2-8 4.5-14.5T189-792l160 48q11 3 11 14t-11 15l-55 18 184 183q6 6 6 15t-6 15q-6 6-15 6t-15-6Z"/>
    </Icon>
  );
});

IconMaterialDragClickW100Filled.displayName = 'OnesyIconMaterialDragClickW100Filled';

export default IconMaterialDragClickW100Filled;
