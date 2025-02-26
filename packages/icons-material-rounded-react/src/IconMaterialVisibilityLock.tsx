import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVisibilityLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityLock'

      short_name='VisibilityLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-134 0-250.5-72T56-466q-4-8-6-16.5T48-500q0-9 2-17.5t6-16.5q57-122 173.5-194T480-800q119 0 221.5 54.5T870-595q10 14 5.5 30.5T856-540q-15 8-31 3.5T799-555q-55-78-138.5-121.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q10 0 20-.5t20-1.5q16-2 28 8.5t12 26.5q0 17-11.5 30T520-202q-10 1-20 1.5t-20 .5Zm0-120q22 0 42.5-5t38.5-14q5-50 31.5-90t67.5-64v-7q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm-5-180Zm205 380q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z"/>
    </Icon>
  );
});

IconMaterialVisibilityLock.displayName = 'OnesyIconMaterialVisibilityLock';

export default IconMaterialVisibilityLock;
