import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlakyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlakyW100Filled'

      short_name='Flaky'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM294-534l56-57 56 57 20-20-57-56 57-56-20-20-56 57-56-57-20 20 57 56-57 56 20 20Zm186 374q133 0 226.5-93.5T800-480q0-66-25-124t-69-102L254-254q44 44 102 69t124 25Zm82-119-74-73 20-20 53 53 100-99 20 20-119 119Z"/>
    </Icon>
  );
});

IconMaterialFlakyW100Filled.displayName = 'OnesyIconMaterialFlakyW100Filled';

export default IconMaterialFlakyW100Filled;
