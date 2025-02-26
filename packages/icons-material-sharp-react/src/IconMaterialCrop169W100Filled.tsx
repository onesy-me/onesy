import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop169W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169W100Filled'

      short_name='Crop169'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332v-296h616v296H172Z"/>
    </Icon>
  );
});

IconMaterialCrop169W100Filled.displayName = 'OnesyIconMaterialCrop169W100Filled';

export default IconMaterialCrop169W100Filled;
