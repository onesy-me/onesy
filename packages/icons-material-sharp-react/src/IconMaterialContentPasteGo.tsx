import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPasteGo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteGo'

      short_name='ContentPasteGo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-120-56-57 63-63H480v-80h247l-63-64 56-56 160 160-160 160Zm120-440h-80v-200h-80v120H280v-120h-80v560h200v80H120v-720h247q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h246v280ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialContentPasteGo.displayName = 'OnesyIconMaterialContentPasteGo';

export default IconMaterialContentPasteGo;
