import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleHindu = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHindu'

      short_name='TempleHindu'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="13.51,5 10.49,5 9.89,7 14.11,7"/><polygon opacity=".3" points="14.71,9 9.29,9 8.69,11 15.31,11"/><polygon opacity=".3" points="15.91,13 8.09,13 7.49,15 4,15 4,20 9,20 9,15 15,15 15,20 20,20 20,15 16.51,15"/><path d="M20 11v2h-2L15 3V1h-2v2h-2.03V1h-2v2.12L6 13H4v-2H2v11h9v-5h2v5h9V11h-2zm-9.51-6h3.02l.6 2H9.89l.6-2zm-1.2 4h5.42l.6 2H8.69l.6-2zM20 20h-5v-5H9v5H4v-5h3.49l.6-2h7.82l.6 2H20v5z"/></g></g>
    </Icon>
  );
});

IconMaterialTempleHindu.displayName = 'OnesyIconMaterialTempleHindu';

export default IconMaterialTempleHindu;
