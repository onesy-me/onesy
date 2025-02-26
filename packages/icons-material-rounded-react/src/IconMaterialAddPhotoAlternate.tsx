import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddPhotoAlternate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternate'

      short_name='AddPhotoAlternate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320q17 0 28.5 11.5T560-800q0 17-11.5 28.5T520-760H200v560h560v-320q0-17 11.5-28.5T800-560q17 0 28.5 11.5T840-520v320q0 33-23.5 56.5T760-120H200Zm480-560h-40q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h40v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h40q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680h-40v40q0 17-11.5 28.5T720-600q-17 0-28.5-11.5T680-640v-40ZM450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320Zm30-160Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternate.displayName = 'OnesyIconMaterialAddPhotoAlternate';

export default IconMaterialAddPhotoAlternate;
