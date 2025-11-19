import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableEditW100Filled'

      short_name='TableEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-406v-206h294v206H172Zm0-234v-148h616v148H172Zm0 468v-206h294v206H172Zm322-234v-206h294v54L635-406H494Zm38 274v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialTableEditW100Filled.displayName = 'OnesyIconMaterialTableEditW100Filled';

export default IconMaterialTableEditW100Filled;
