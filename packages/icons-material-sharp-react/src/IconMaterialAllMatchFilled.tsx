import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllMatchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchFilled'

      short_name='AllMatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m691-150 139-138-42-42-97 95-39-39-42 43 81 81Zm29 110q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-200l180-280-180-280h522l185 261q-24-10-55.5-16t-57.5-5q-118 2-196 85.5T440-239q0 10 .5 19.5T443-200H120Z"/>
    </Icon>
  );
});

IconMaterialAllMatchFilled.displayName = 'OnesyIconMaterialAllMatchFilled';

export default IconMaterialAllMatchFilled;
