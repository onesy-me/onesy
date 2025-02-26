import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelvesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelvesW100'

      short_name='Shelves'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185.96-87Q180-87 176-91.03q-4-4.02-4-9.97v-757q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v71h560v-71q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v757q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-71H200v71q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM200-520h112v-118q0-12.75 8.63-21.38Q329.25-668 342-668h116q12.75 0 21.38 8.62Q488-650.75 488-638v118h272v-239H200v239Zm0 320h272v-118q0-12.75 8.63-21.38Q489.25-348 502-348h116q12.75 0 21.38 8.62Q648-330.75 648-318v118h112v-292H200v292Zm140-320h120v-120H340v120Zm160 320h120v-120H500v120ZM340-520h120-120Zm160 320h120-120Z"/>
    </Icon>
  );
});

IconMaterialShelvesW100.displayName = 'OnesyIconMaterialShelvesW100';

export default IconMaterialShelvesW100;
