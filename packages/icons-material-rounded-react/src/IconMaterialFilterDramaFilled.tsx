import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterDramaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaFilled'

      short_name='FilterDrama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-160q-92 0-156-64T40-380q0-73 53.5-126.5T220-560q64 0 113.5 42T396-415q3 15 14.5 25t25.5 10q20 0 32-13.5t9-30.5q-14-86-75-143t-152-73q18-74 81.5-117T480-800q118 0 199 81t81 199q63 0 111.5 56T920-340q0 75-52.5 127.5T740-160H260Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaFilled.displayName = 'OnesyIconMaterialFilterDramaFilled';

export default IconMaterialFilterDramaFilled;
