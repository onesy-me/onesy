import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditDocumentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentW100'

      short_name='EditDocument'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M542-132v-78l231-230 77 78-230 230h-78Zm268-230-37-38 37 38ZM570-160h38l144-144-18-20.03L715-343 570-198v38Zm-358 28v-696h374l162 162v99h-28v-85H572v-148H240v640h202v28H212Zm282-348Zm240 155.97L715-343l37 39-18-20.03Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentW100.displayName = 'OnesyIconMaterialEditDocumentW100';

export default IconMaterialEditDocumentW100;
