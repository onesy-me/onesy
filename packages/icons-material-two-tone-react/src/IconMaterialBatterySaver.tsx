import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatterySaver = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaver'

      short_name='BatterySaver'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M16,4h-2V2h-4v2H8C7.45,4,7,4.45,7,5v16c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5C17,4.45,16.55,4,16,4z M15,14h-2v2h-2 v-2H9v-2h2v-2h2v2h2V14z"/></g></g>
    </Icon>
  );
});

IconMaterialBatterySaver.displayName = 'OnesyIconMaterialBatterySaver';

export default IconMaterialBatterySaver;
