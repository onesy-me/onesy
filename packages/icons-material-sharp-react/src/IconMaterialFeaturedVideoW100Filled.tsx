import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeaturedVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoW100Filled'

      short_name='FeaturedVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-426h308v-228H226v228Zm-94 214v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoW100Filled.displayName = 'OnesyIconMaterialFeaturedVideoW100Filled';

export default IconMaterialFeaturedVideoW100Filled;
