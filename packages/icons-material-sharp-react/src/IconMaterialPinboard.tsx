import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pinboard'

      short_name='Pinboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m260-80-40-40v-160H80v-80l60-106v-94H80v-80h360v80h-60v94l60 106v80H300v160l-40 40Zm220-80v-80h320v-480H80v-80h800v640H480ZM172-360h176l-48-84v-116h-80v116l-48 84Zm88 0Z"/>
    </Icon>
  );
});

IconMaterialPinboard.displayName = 'OnesyIconMaterialPinboard';

export default IconMaterialPinboard;
