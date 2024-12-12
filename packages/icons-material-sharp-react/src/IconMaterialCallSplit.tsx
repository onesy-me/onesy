import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallSplit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplit'

      short_name='CallSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160v-304L240-664v104h-80v-240h240v80H296l224 224v336h-80Zm154-376-58-58 128-126H560v-80h240v240h-80v-104L594-536Z"/>
    </Icon>
  );
});

IconMaterialCallSplit.displayName = 'OnesyIconMaterialCallSplit';

export default IconMaterialCallSplit;
