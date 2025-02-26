import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelfAutoHideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfAutoHideW100Filled'

      short_name='ShelfAutoHide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-108q11 0 19.5-8.5T508-308q0-11-8.5-19.5T480-336q-11 0-19.5 8.5T452-308q0 11 8.5 19.5T480-280Zm-160 0q11 0 19.5-8.5T348-308q0-11-8.5-19.5T320-336q-11 0-19.5 8.5T292-308q0 11 8.5 19.5T320-280Zm320 0q11 0 19.5-8.5T668-308q0-11-8.5-19.5T640-336q-11 0-19.5 8.5T612-308q0 11 8.5 19.5T640-280Z"/>
    </Icon>
  );
});

IconMaterialShelfAutoHideW100Filled.displayName = 'OnesyIconMaterialShelfAutoHideW100Filled';

export default IconMaterialShelfAutoHideW100Filled;
