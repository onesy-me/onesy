import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPasteSearch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteSearch'

      short_name='ContentPasteSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M864-40 756-148q-22 13-46 20.5t-50 7.5q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7.5 50T812-204L920-96l-56 56ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm180-360h-80v-200h-80v120H280v-120h-80v560h200v80H120v-720h247q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h246v280ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialContentPasteSearch.displayName = 'OnesyIconMaterialContentPasteSearch';

export default IconMaterialContentPasteSearch;
