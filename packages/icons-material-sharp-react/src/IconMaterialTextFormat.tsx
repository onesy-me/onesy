import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextFormat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormat'

      short_name='TextFormat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-80h560v80H200Zm76-160 164-440h80l164 440h-76l-38-112H392l-40 112h-76Zm138-176h132l-64-182h-4l-64 182Z"/>
    </Icon>
  );
});

IconMaterialTextFormat.displayName = 'OnesyIconMaterialTextFormat';

export default IconMaterialTextFormat;
