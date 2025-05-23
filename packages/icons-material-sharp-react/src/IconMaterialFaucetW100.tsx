import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFaucetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaucetW100'

      short_name='Faucet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-388v-28h196v-90H212v-28h144v118h110v-276q0-57.22 39.58-96.61Q545.17-828 602.07-828 640-828 673-808q33 20 50 55l33 67-25 13-34-68q-14.12-26.93-39.8-42.97Q631.53-800 602-800q-45 0-76.5 31.5T494-692v276h110v-118h144v28H632v90h196v28H132Zm80 216v-216h28v188h480v-188h28v216H212Z"/>
    </Icon>
  );
});

IconMaterialFaucetW100.displayName = 'OnesyIconMaterialFaucetW100';

export default IconMaterialFaucetW100;
