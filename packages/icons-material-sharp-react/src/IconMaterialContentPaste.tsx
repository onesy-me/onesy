import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPaste = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPaste'

      short_name='ContentPaste'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h247q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h246v720H120Zm80-80h560v-560h-80v120H280v-120h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialContentPaste.displayName = 'OnesyIconMaterialContentPaste';

export default IconMaterialContentPaste;
