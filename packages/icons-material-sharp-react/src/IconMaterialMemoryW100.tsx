import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMemoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryW100'

      short_name='Memory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-412v-136h136v136H412Zm28-28h80v-80h-80v80Zm-54 244v-56H252v-134h-56v-28h56v-132h-56v-28h56v-134h134v-56h28v56h132v-56h28v56h134v134h56v28h-56v132h56v28h-56v134H574v56h-28v-56H414v56h-28Zm294-84v-400H280v400h400ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialMemoryW100.displayName = 'OnesyIconMaterialMemoryW100';

export default IconMaterialMemoryW100;
