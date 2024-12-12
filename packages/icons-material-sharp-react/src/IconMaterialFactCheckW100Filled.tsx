import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheckW100Filled'

      short_name='FactCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-306h148v-28H226v28Zm356-91 161-161-20-20-141 142-57-57-19 20 76 76Zm-356-69h148v-28H226v28Zm0-160h148v-28H226v28Zm-94 454v-616h696v616H132Z"/>
    </Icon>
  );
});

IconMaterialFactCheckW100Filled.displayName = 'OnesyIconMaterialFactCheckW100Filled';

export default IconMaterialFactCheckW100Filled;
