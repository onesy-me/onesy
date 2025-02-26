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
      <path d="m480-398 146-92-146-92v184ZM92-174v-404h28v376h602v28H92Zm108-108v-416h216v-118h236v118h216v416H200Zm244-416h180v-90H444v90ZM228-310h612v-360H228v360Zm0-360v360-360Z"/>
    </Icon>
  );
});

IconMaterialShopTwoW100.displayName = 'OnesyIconMaterialShopTwoW100';

export default IconMaterialShopTwoW100;
