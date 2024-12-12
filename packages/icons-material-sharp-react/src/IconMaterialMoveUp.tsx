import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveUp'

      short_name='MoveUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160q-117 0-198.5-81.5T40-440q0-107 70.5-186.5T287-718l-63-66 56-56 160 160-160 160-56-57 59-59q-71 14-117 69t-46 127q0 83 58.5 141.5T320-240h120v80H320Zm200-360v-280h360v280H520Zm0 360v-280h360v280H520Zm80-80h200v-120H600v120Z"/>
    </Icon>
  );
});

IconMaterialMoveUp.displayName = 'OnesyIconMaterialMoveUp';

export default IconMaterialMoveUp;
