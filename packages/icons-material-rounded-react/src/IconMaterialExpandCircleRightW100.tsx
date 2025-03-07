import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandCircleRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleRightW100'

      short_name='ExpandCircleRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M544-480 430-366q-4 3.75-4 9.37 0 5.63 4 9.63 4 5 10 4.5t10-4.5l112-112q9-9 9-21t-9-21L450-613q-4-4-10-4.5t-10 4.5q-4 4-3.5 10t4.5 10l113 113Zm-63.83 348q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleRightW100.displayName = 'OnesyIconMaterialExpandCircleRightW100';

export default IconMaterialExpandCircleRightW100;
