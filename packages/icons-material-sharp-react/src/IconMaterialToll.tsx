import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Toll'

      short_name='Toll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm-320-10q-106-28-173-114T40-480q0-110 67-196t173-114v84q-72 25-116 87t-44 139q0 77 44 139t116 87v84Zm320-310Zm0 240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialToll.displayName = 'OnesyIconMaterialToll';

export default IconMaterialToll;
