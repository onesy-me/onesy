import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitWidthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitWidthW100'

      short_name='FitWidth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h40v616h-40Zm576 0v-616h40v616h-40ZM316-460v-40h40v40h-40Zm144 0v-40h40v40h-40Zm144 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialFitWidthW100.displayName = 'OnesyIconMaterialFitWidthW100';

export default IconMaterialFitWidthW100;
