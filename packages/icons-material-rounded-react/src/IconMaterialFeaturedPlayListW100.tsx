import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeaturedPlayListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayListW100'

      short_name='FeaturedPlayList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-466h280q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-120h280q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-88 374q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFeaturedPlayListW100.displayName = 'OnesyIconMaterialFeaturedPlayListW100';

export default IconMaterialFeaturedPlayListW100;
