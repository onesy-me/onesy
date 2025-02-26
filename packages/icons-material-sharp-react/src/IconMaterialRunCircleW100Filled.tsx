import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRunCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunCircleW100Filled'

      short_name='RunCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M526-246v-139l-55-60-22 112-138-29 6-27 111 23 42-212-76 28v64h-28v-84l127-46q12.95-5 25.48 0 12.52 5 18.86 18.35Q560-549 589-532.5q29 16.5 45 18.5v28q-21-2-52.5-21T521-565l-20 111 53 57v151h-28Zm14-400q-14.45 0-24.22-9.78Q506-665.55 506-680t9.78-24.22Q525.55-714 540-714t24.22 9.78Q574-694.45 574-680t-9.78 24.22Q554.45-646 540-646Zm-59.83 514q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialRunCircleW100Filled.displayName = 'OnesyIconMaterialRunCircleW100Filled';

export default IconMaterialRunCircleW100Filled;
