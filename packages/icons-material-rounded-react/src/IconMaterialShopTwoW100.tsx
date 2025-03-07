import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShopTwoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwoW100'

      short_name='ShopTwo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-174q-26 0-43-17t-17-43v-330q0-6 4-10t10-4q6 0 10 4t4 10v330q0 12 10 22t22 10h556q6 0 10 4t4 10q0 6-4 10t-10 4H152Zm108-108q-26 0-43-17t-17-43v-326q0-13 8.5-21.5T230-698h186v-58q0-26 17-43t43-17h116q26 0 43 17t17 43v58h186q13 0 21.5 8.5T868-668v326q0 26-17 43t-43 17H260Zm0-28h548q12 0 22-10t10-22v-328H228v328q0 12 10 22t22 10Zm184-388h180v-58q0-12-10-22t-22-10H476q-12 0-22 10t-10 22v58ZM228-310v-360 360Zm252-113q0 10 8.5 14.5t16.5-.5l100-63q8-5 8-14t-8-14l-100-63q-8-5-16.5-.5T480-549v126Z"/>
    </Icon>
  );
});

IconMaterialShopTwoW100.displayName = 'OnesyIconMaterialShopTwoW100';

export default IconMaterialShopTwoW100;
