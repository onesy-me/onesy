import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditW100Filled'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-498l98-118h419l99 120v62L588-407v-243H372v257l108-54 99 49-107 106v120H172Zm400 0v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38ZM215-678h529l-68-82H283l-68 82Z"/>
    </Icon>
  );
});

IconMaterialBoxEditW100Filled.displayName = 'OnesyIconMaterialBoxEditW100Filled';

export default IconMaterialBoxEditW100Filled;
