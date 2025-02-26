import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleRightW100Filled'

      short_name='ArrowCircleRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-357 123-123-123-123-19 19 90 90H346v28h205l-90 90 19 19Zm.17 225q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleRightW100Filled.displayName = 'OnesyIconMaterialArrowCircleRightW100Filled';

export default IconMaterialArrowCircleRightW100Filled;
