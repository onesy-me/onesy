import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDiningW100Filled'

      short_name='LocalDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m171-156-20-20 404-404q-21-50-10-94.5t50-83.5q35-35 92-52t96 22q39 39 22 96t-52 92q-39 39-83.5 50T575-560l-80 80 304 304-20 20-304-302-304 302Zm124-336L187-600q-42-42-46.5-99T171-804l218 218-94 94Z"/>
    </Icon>
  );
});

IconMaterialLocalDiningW100Filled.displayName = 'OnesyIconMaterialLocalDiningW100Filled';

export default IconMaterialLocalDiningW100Filled;
