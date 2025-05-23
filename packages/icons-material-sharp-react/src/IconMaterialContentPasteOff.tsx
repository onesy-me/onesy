import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPasteOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOff'

      short_name='ContentPasteOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m840-234-80-80v-446h-80v120H434L234-840h133q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h246v606ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Zm166 560L200-646v446h446Zm-526 80v-606l-65-65 57-57 736 736-57 57-65-65H120Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOff.displayName = 'OnesyIconMaterialContentPasteOff';

export default IconMaterialContentPasteOff;
