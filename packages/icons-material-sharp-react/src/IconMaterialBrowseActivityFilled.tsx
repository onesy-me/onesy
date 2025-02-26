import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseActivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityFilled'

      short_name='BrowseActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-80h880v80H40Zm40-120v-280h215l80 160h48l135-235 37 75h285v280H80Zm323-245-59-115H80v-240h800v240H645l-60-120h-48L403-485Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivityFilled.displayName = 'OnesyIconMaterialBrowseActivityFilled';

export default IconMaterialBrowseActivityFilled;
