import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHotelClassFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassFilled'

      short_name='HotelClass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m668-380 152-130 120 10-176 153 52 227-102-62-46-198Zm-94-292-42-98 46-110 92 217-96-9ZM173-120l65-281L20-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
    </Icon>
  );
});

IconMaterialHotelClassFilled.displayName = 'OnesyIconMaterialHotelClassFilled';

export default IconMaterialHotelClassFilled;
