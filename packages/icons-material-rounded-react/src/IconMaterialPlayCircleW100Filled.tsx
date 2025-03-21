import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayCircleW100Filled'

      short_name='PlayCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m441-370 141-91q11-6.8 11-18.9 0-12.1-11-19.1l-141-91q-11-8-23-1.44-12 6.55-12 20.44v182q0 13.89 12 20.44 12 6.56 23-1.44Zm39.17 238q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialPlayCircleW100Filled.displayName = 'OnesyIconMaterialPlayCircleW100Filled';

export default IconMaterialPlayCircleW100Filled;
