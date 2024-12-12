import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridGoldenratioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGoldenratioW100Filled'

      short_name='GridGoldenratio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-132v-280H132v-28h280v-80H132v-28h280v-280h28v280h80v-280h28v280h280v28H548v80h280v28H548v280h-28v-280h-80v280h-28Zm28-308h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialGridGoldenratioW100Filled.displayName = 'OnesyIconMaterialGridGoldenratioW100Filled';

export default IconMaterialGridGoldenratioW100Filled;
