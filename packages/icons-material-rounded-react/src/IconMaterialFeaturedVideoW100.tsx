import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeaturedVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoW100'

      short_name='FeaturedVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-426h248q13 0 21.5-8.5T534-456v-168q0-13-8.5-21.5T504-654H256q-13 0-21.5 8.5T226-624v168q0 13 8.5 21.5T256-426Zm-64 214q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoW100.displayName = 'OnesyIconMaterialFeaturedVideoW100';

export default IconMaterialFeaturedVideoW100;
