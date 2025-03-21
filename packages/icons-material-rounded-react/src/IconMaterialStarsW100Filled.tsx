import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarsW100Filled'

      short_name='Stars'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-380 95 72q9 7 18.5.5T600-325l-36-119 91.88-64.55Q666-516 662.5-527q-3.5-11-15.4-11H534l-39-125q-3.94-11-14.97-11Q469-674 465-663l-39 125H312.9q-11.9 0-15.4 11t6.62 18.45L396-444l-36 119q-3 11 6.5 17.5t18.5-.5l95-72Zm.17 248q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialStarsW100Filled.displayName = 'OnesyIconMaterialStarsW100Filled';

export default IconMaterialStarsW100Filled;
