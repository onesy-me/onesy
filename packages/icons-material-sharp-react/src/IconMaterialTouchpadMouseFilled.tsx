import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTouchpadMouseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseFilled'

      short_name='TouchpadMouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-80q-91 0-155.5-64.5T440-300v-60h440v60q0 91-64 155.5T660-80ZM80-160v-640h800v176q-43-46-100-71t-120-25q-125 0-212.5 87.5T360-420v120q0 37 8.5 72.5T394-160H80Zm360-280q3-75 54-129.5T620-637v197H440Zm260 0v-197q75 13 126 67.5T880-440H700Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseFilled.displayName = 'OnesyIconMaterialTouchpadMouseFilled';

export default IconMaterialTouchpadMouseFilled;
