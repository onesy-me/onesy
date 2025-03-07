import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Castle'

      short_name='Castle'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M17,7H7v6H3v6h5v-1c0-2.21,1.79-4,4-4s4,1.79,4,4v1h5v-6h-4V7z M11,12H9V9h2V12z M15,12h-2V9h2V12z" opacity=".3"/><g><path d="M21,9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1,0.9-2,2-2s2,0.9,2,2v3h9V9H21z M21,19h-5v-1 c0-2.21-1.79-4-4-4s-4,1.79-4,4v1H3v-6h4V7h10v6h4V19z"/></g><g><rect height="3" width="2" x="9" y="9"/></g><g><rect height="3" width="2" x="13" y="9"/></g></g></g>
    </Icon>
  );
});

IconMaterialCastle.displayName = 'OnesyIconMaterialCastle';

export default IconMaterialCastle;
