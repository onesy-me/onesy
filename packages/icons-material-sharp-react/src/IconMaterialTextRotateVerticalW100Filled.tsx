import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotateVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVerticalW100Filled'

      short_name='TextRotateVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m474-338 154-404h28l150 404h-30l-42-114H546l-42 114h-30Zm82-140h168l-80-220h-4l-84 220ZM242-196 138-300l20-20 70 66v-560h28v560l70-66 20 20-104 104Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVerticalW100Filled.displayName = 'OnesyIconMaterialTextRotateVerticalW100Filled';

export default IconMaterialTextRotateVerticalW100Filled;
