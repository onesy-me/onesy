import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddAd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAd'

      short_name='AddAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM40-120v-720h720v280h-80v-80H120v440h520v80H40Zm80-600h560v-40H120v40Zm0 0v-40 40Z"/>
    </Icon>
  );
});

IconMaterialAddAd.displayName = 'OnesyIconMaterialAddAd';

export default IconMaterialAddAd;
