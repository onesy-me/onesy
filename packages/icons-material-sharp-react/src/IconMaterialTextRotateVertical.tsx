import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotateVertical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVertical'

      short_name='TextRotateVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m436-320 164-440h80l164 440h-76l-40-112H552l-40 112h-76Zm138-176h132l-64-182h-4l-64 182ZM240-160 100-300l56-56 44 42v-526h80v526l44-42 56 56-140 140Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVertical.displayName = 'OnesyIconMaterialTextRotateVertical';

export default IconMaterialTextRotateVertical;
