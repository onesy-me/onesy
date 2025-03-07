import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoFilter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilter'

      short_name='PhotoFilter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h8q.425 0 .713.287Q14 3.575 14 4t-.287.712Q13.425 5 13 5H5v14h14v-8q0-.425.288-.713Q19.575 10 20 10t.712.287Q21 10.575 21 11v8q0 .825-.587 1.413Q19.825 21 19 21Zm5.75-7.75L9 12.45q-.275-.125-.275-.45T9 11.55l1.75-.8.8-1.75q.125-.275.45-.275t.45.275l.8 1.75 1.75.8q.275.125.275.45t-.275.45l-1.75.8-.8 1.75q-.125.275-.45.275T11.55 15Zm5.3-5.3-1.325-.6q-.2-.1-.2-.35 0-.25.2-.35l1.325-.6.6-1.325q.1-.2.35-.2.25 0 .35.2l.6 1.325 1.325.6q.2.1.2.35 0 .25-.2.35l-1.325.6-.6 1.325q-.1.2-.35.2-.25 0-.35-.2Z"/>
    </Icon>
  );
});

IconMaterialPhotoFilter.displayName = 'OnesyIconMaterialPhotoFilter';

export default IconMaterialPhotoFilter;
