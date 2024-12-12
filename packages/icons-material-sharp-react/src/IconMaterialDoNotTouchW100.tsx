import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotTouchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchW100'

      short_name='DoNotTouch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m788-283-28-28v-437h28v465ZM360-711l-28-28v-20h28v48Zm143 143-28-28v-243h28v271Zm143 62h-28v-293h28v293ZM412-146h362L360-560v195L175-494l237 348Zm-15 28L127-514l28-28 177 123v-169L90-830l20-20L872-88l-20 20-50-50H397Zm168-388Zm2 153Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchW100.displayName = 'OnesyIconMaterialDoNotTouchW100';

export default IconMaterialDoNotTouchW100;
