import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaceItemFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaceItemFilled'

      short_name='PlaceItem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-560h240v80H200v400h560v-400H600v-80h240v560H120Zm360-200L320-480l56-56 64 63v-487h80v487l64-63 56 56-160 160Z"/>
    </Icon>
  );
});

IconMaterialPlaceItemFilled.displayName = 'OnesyIconMaterialPlaceItemFilled';

export default IconMaterialPlaceItemFilled;
