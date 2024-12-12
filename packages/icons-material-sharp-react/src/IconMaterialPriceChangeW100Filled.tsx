import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriceChangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeW100Filled'

      short_name='PriceChange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm214-94h28v-40h52q11.9 0 19.95-8.05Q454-362.1 454-374v-92q0-11.9-8.05-19.95Q437.9-494 426-494H294v-92h160v-28h-80v-40h-28v40h-52q-11.9 0-19.95 8.05Q266-597.9 266-586v92q0 11.9 8.05 19.95Q282.1-466 294-466h132v92H266v28h80v40Zm294-18 56-56H584l56 56Zm-56-246h112l-56-56-56 56Z"/>
    </Icon>
  );
});

IconMaterialPriceChangeW100Filled.displayName = 'OnesyIconMaterialPriceChangeW100Filled';

export default IconMaterialPriceChangeW100Filled;
