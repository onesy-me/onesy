import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexDirection = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexDirection'

      short_name='FlexDirection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-280h360v280H80Zm0-360v-280h360v280H80Zm80-80h200v-120H160v120Zm560 440L520-360l56-56 104 103v-487h80v487l104-103 56 56-200 200Z"/>
    </Icon>
  );
});

IconMaterialFlexDirection.displayName = 'OnesyIconMaterialFlexDirection';

export default IconMaterialFlexDirection;
