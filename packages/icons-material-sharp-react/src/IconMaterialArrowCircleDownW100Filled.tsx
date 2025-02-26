import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleDownW100Filled'

      short_name='ArrowCircleDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m481-352 123-123-19-19-90 90v-205h-29v205l-90-90-19 19 124 123Zm-.83 220q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleDownW100Filled.displayName = 'OnesyIconMaterialArrowCircleDownW100Filled';

export default IconMaterialArrowCircleDownW100Filled;
