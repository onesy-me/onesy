import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltW100'

      short_name='Bolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m422-232 207-248H469l29-227-185 267h139l-30 208Zm-42 94 40-274H259l281-405-39 309h188L380-138Zm91-332Z"/>
    </Icon>
  );
});

IconMaterialBoltW100.displayName = 'OnesyIconMaterialBoltW100';

export default IconMaterialBoltW100;
