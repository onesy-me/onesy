import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeselectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeselectFilled'

      short_name='Deselect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-56 567-280H280v-287L56-791l56-57 736 736-57 56ZM360-360h127L360-487v127Zm320-33-80-80v-127H473l-80-80h287v287ZM280-120v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0 640v-80h80v80h-80Zm160-640v-80h80v80h-80ZM120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm640 320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialDeselectFilled.displayName = 'OnesyIconMaterialDeselectFilled';

export default IconMaterialDeselectFilled;
