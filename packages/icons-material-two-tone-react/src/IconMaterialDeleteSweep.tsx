import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteSweep = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweep'

      short_name='DeleteSweep'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 10h6v8H5z" opacity=".3"/><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z"/>
    </Icon>
  );
});

IconMaterialDeleteSweep.displayName = 'OnesyIconMaterialDeleteSweep';

export default IconMaterialDeleteSweep;
