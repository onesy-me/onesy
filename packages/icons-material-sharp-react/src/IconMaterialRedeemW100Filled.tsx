import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRedeemW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedeemW100Filled'

      short_name='Redeem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-302v102h640v-102H160Zm-28-364h207q-5-9-9-19t-4-21q0-29 19.5-48.5T394-774q17.4 0 32.19 9.19Q440.98-755.63 452-742l26 36 26-36q11-14 25.97-23 14.97-9 32.24-9 28.79 0 48.29 19.5T630-706q0 11-3.5 21t-9.5 19h211v494H132v-494Zm28 288h640v-260H526l78 108-22 16-104-142-104 142-22-16 78-108H160v260Zm234-288q17 0 28.5-11.5T434-706q0-17-11.5-28.5T394-746q-17 0-28.5 11.5T354-706q0 17 11.5 28.5T394-666Zm168 0q17 0 28.5-11.5T602-706q0-17-11.5-28.5T562-746q-17 0-28.5 11.5T522-706q0 17 11.5 28.5T562-666Z"/>
    </Icon>
  );
});

IconMaterialRedeemW100Filled.displayName = 'OnesyIconMaterialRedeemW100Filled';

export default IconMaterialRedeemW100Filled;
