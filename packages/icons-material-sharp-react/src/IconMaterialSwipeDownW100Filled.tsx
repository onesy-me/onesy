import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownW100Filled'

      short_name='SwipeDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M208-355 91-472l19-20 82 82q-10-37-15-74.5t-5-75.5q0-73 23.5-141T263-828l20 20q-39 55-61 118t-22 130q0 39 5 77.5t16 75.5l85-85 19 20-117 117Zm405 188L328-299l18-35 149-17-120-327 27-10 105 290 78-28-60-164 27-10 60 164 78-29-45-125 26-10 46 125 78-28-19-50 26-10 106 289-295 107Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownW100Filled.displayName = 'OnesyIconMaterialSwipeDownW100Filled';

export default IconMaterialSwipeDownW100Filled;
