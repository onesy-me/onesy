import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPasteGo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteGo'

      short_name='ContentPasteGo'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M10,17c0-3.31,2.69-6,6-6h3V5h-2v3H7V5H5v14h5V17z" opacity=".3"/><path d="M10,19H5V5h2v3h10V5h2v6h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h5V19z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z"/><polygon points="18.01,13 16.59,14.41 18.17,15.99 12,15.99 12,17.99 18.17,17.99 16.59,19.58 18.01,20.99 22,16.99"/></g></g>
    </Icon>
  );
});

IconMaterialContentPasteGo.displayName = 'OnesyIconMaterialContentPasteGo';

export default IconMaterialContentPasteGo;
