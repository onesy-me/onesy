import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewAgenda = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgenda'

      short_name='ViewAgenda'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><rect height="4" opacity=".3" width="14" x="5" y="5"/><rect height="4" opacity=".3" width="14" x="5" y="15"/><path d="M19,13H5c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4C21,13.9,20.1,13,19,13z M19,19H5v-4h14V19z"/><path d="M19,3H5C3.9,3,3,3.9,3,5v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,9H5V5h14V9z"/></g></g>
    </Icon>
  );
});

IconMaterialViewAgenda.displayName = 'OnesyIconMaterialViewAgenda';

export default IconMaterialViewAgenda;
