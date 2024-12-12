import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditDocumentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentW100Filled'

      short_name='EditDocument'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h374l162 162v109L442-252v120H212Zm330 0v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38ZM572-652h148L572-800l148 148-148-148v148Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentW100Filled.displayName = 'OnesyIconMaterialEditDocumentW100Filled';

export default IconMaterialEditDocumentW100Filled;
