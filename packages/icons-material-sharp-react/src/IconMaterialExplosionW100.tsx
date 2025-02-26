import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExplosionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplosionW100'

      short_name='Explosion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-298 53.96-53.96h74.08v-74.08L662-480l-53.96-53.96v-74.08h-74.08L480-662l-53.96 53.96h-74.08v74.08L298-480l53.96 53.96v74.08h74.08L480-298Zm0 198L367.77-212H212v-155.77L100-480l112-112.22V-748h155.77L480-860l112.22 112H748v155.78L860-480 748-367.77V-212H592.22L480-100Zm0-40 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </Icon>
  );
});

IconMaterialExplosionW100.displayName = 'OnesyIconMaterialExplosionW100';

export default IconMaterialExplosionW100;
