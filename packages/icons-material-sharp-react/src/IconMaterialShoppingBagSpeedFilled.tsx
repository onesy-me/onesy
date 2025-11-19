import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingBagSpeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagSpeedFilled'

      short_name='ShoppingBagSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m150-80 10-80h163l40-160h80l60-240H210l20-160h150q8-75 51.5-117.5T550-880q64 0 106.5 47.5T698-720h192L810-80H150ZM40-240l20-80h220l-20 80H40Zm80-160 20-80h260l-20 80H120Zm340-320h159q1-33-22.5-56.5T540-800q-35 0-55.5 21.5T460-720Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagSpeedFilled.displayName = 'OnesyIconMaterialShoppingBagSpeedFilled';

export default IconMaterialShoppingBagSpeedFilled;
