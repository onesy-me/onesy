import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReviews = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reviews'

      short_name='Reviews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialReviews.displayName = 'OnesyIconMaterialReviews';

export default IconMaterialReviews;
