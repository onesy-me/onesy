import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataset = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dataset'

      short_name='Dataset'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g opacity=".3"><path d="M5,19h14V5H5V19z M13,7h4v4h-4V7z M13,13h4v4h-4V13z M7,7h4v4H7V7z M7,13h4v4H7V13z"/></g><g><rect height="4" width="4" x="7" y="13"/></g><g><rect height="4" width="4" x="13" y="13"/></g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><g><rect height="4" width="4" x="7" y="7"/></g><g><rect height="4" width="4" x="13" y="7"/></g></g></g>
    </Icon>
  );
});

IconMaterialDataset.displayName = 'OnesyIconMaterialDataset';

export default IconMaterialDataset;
