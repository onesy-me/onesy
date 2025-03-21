import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveRoadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoadFilled'

      short_name='RemoveRoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-480v-280q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v280q0 17-11.5 28.5T760-440q-17 0-28.5-11.5T720-480ZM160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160q-17 0-28.5-11.5T160-200Zm280-480v-80q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v80q0 17-11.5 28.5T480-640q-17 0-28.5-11.5T440-680Zm0 240v-80q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520v80q0 17-11.5 28.5T480-400q-17 0-28.5-11.5T440-440Zm0 240v-80q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v80q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200Zm318 35-57 57q-12 12-28 11.5T645-109q-11-12-11.5-28t11.5-28l57-57-56-56q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l56 57 57-57q12-12 28-11.5t28 12.5q11 12 11.5 28T872-278l-57 57 57 58q11 11 11 27t-11 28q-11 11-28 11t-28-11l-58-57Z"/>
    </Icon>
  );
});

IconMaterialRemoveRoadFilled.displayName = 'OnesyIconMaterialRemoveRoadFilled';

export default IconMaterialRemoveRoadFilled;
