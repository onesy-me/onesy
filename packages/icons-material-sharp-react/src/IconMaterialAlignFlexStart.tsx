import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignFlexStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexStart'

      short_name='AlignFlexStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-800v-80h800v80H80Zm340 640v-560h120v560H420Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexStart.displayName = 'OnesyIconMaterialAlignFlexStart';

export default IconMaterialAlignFlexStart;
