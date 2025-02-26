import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragPanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragPanW100'

      short_name='DragPan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-116 346-250l20-20 100 100v-296H170l100 100-20 20-134-134 134-134 20 20-100 100h296v-296L366-690l-20-20 134-134 134 134-20 20-100-100v296h296L690-594l20-20 134 134-134 134-20-20 100-100H494v296l100-100 20 20-134 134Z"/>
    </Icon>
  );
});

IconMaterialDragPanW100.displayName = 'OnesyIconMaterialDragPanW100';

export default IconMaterialDragPanW100;
