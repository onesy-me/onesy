import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriceCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckW100'

      short_name='PriceCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-386v-40H186v-28h200v-132H186v-188h100v-40h28v40h100v28H214v132h200v188H314v40h-28Zm272 230L424-290l20-20 114 114 228-228 20 20-248 248Z"/>
    </Icon>
  );
});

IconMaterialPriceCheckW100.displayName = 'OnesyIconMaterialPriceCheckW100';

export default IconMaterialPriceCheckW100;
