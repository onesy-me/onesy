import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddReactionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddReactionFilled'

      short_name='AddReaction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q34 0 66 5t63 16q14 5 22.5 17.5T640-814v57q0 32 22.5 54.5T717-680h3v23q0 23 17 40t40 17h51q15 0 27 9t16 24q5 21 7 42.5t2 44.5q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-180q58 0 107-28t79-76q6-12-1-24t-21-12H316q-14 0-21 12t-1 24q30 48 79.5 76T480-260ZM340-520q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm280 0q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm180-240h-40q-17 0-28.5-11.5T720-800q0-17 11.5-28.5T760-840h40v-40q0-17 11.5-28.5T840-920q17 0 28.5 11.5T880-880v40h40q17 0 28.5 11.5T960-800q0 17-11.5 28.5T920-760h-40v40q0 17-11.5 28.5T840-680q-17 0-28.5-11.5T800-720v-40Z"/>
    </Icon>
  );
});

IconMaterialAddReactionFilled.displayName = 'OnesyIconMaterialAddReactionFilled';

export default IconMaterialAddReactionFilled;
