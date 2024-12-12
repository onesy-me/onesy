import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreW100Filled'

      short_name='Store'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M182-746v-28h596v28H182Zm4 560v-240h-52v-28l48-200h596l48 200v28h-52v240h-28v-240H534v240H186Zm28-28h292v-212H214v212Z"/>
    </Icon>
  );
});

IconMaterialStoreW100Filled.displayName = 'OnesyIconMaterialStoreW100Filled';

export default IconMaterialStoreW100Filled;
