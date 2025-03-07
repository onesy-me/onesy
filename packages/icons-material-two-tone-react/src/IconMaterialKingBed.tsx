import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKingBed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBed'

      short_name='KingBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="3" opacity=".3" width="16" x="4" y="12"/><path d="M20,10V7c0-1.1-0.9-2-2-2H6C4.9,5,4,5.9,4,7v3c-1.1,0-2,0.9-2,2v5h1.33L4,19h1l0.67-2h12.67L19,19h1l0.67-2H22v-5 C22,10.9,21.1,10,20,10z M13,7h5v3h-5V7z M6,7h5v3H6V7z M20,15H4v-3h16V15z"/></g></g>
    </Icon>
  );
});

IconMaterialKingBed.displayName = 'OnesyIconMaterialKingBed';

export default IconMaterialKingBed;
