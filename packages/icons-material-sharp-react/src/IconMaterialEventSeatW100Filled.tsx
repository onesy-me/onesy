import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventSeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatW100Filled'

      short_name='EventSeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-156v-188h588v188h-28v-160H214v160h-28Zm-14-262v-68h68v68h-68Zm148-6v-374h320v374H320Zm400 6v-68h68v68h-68Z"/>
    </Icon>
  );
});

IconMaterialEventSeatW100Filled.displayName = 'OnesyIconMaterialEventSeatW100Filled';

export default IconMaterialEventSeatW100Filled;
