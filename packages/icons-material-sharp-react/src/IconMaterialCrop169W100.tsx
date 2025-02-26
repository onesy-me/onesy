import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop169W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169W100'

      short_name='Crop169'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332v-296h616v296H172Zm28-28h560v-240H200v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialCrop169W100.displayName = 'OnesyIconMaterialCrop169W100';

export default IconMaterialCrop169W100;
