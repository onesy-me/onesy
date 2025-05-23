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
      <path d="M600-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm-375-30q-84-39-134.5-117T40-480q0-95 50.5-173T225-770q21-10 38 1.5t17 37.5q0 10-6.5 19.5T257-697q-63 29-100 87.5T120-480q0 71 37 129.5T257-263q10 5 16.5 14t6.5 20q0 25-17 37t-38 2Zm375-290Zm0 240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialToll.displayName = 'OnesyIconMaterialToll';

export default IconMaterialToll;
