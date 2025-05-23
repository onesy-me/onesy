import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaW100Filled'

      short_name='Spa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M498-134q-75-9-136-39t-105.5-79.5Q212-302 186-369t-32-149q75 0 138 29t108.5 80Q446-358 472-287.5T498-134Zm-18-212q-20-35-49-69.5T374-472q2-37 10.5-77t22.5-78q14-38 32.5-73t40.5-62q22 27 40.5 61.5T553-627q14 39 23 79t10 78q-33 23-62.5 57.5T480-346Zm46 203q0-37-8-81.5T493-314q37-87 127.5-146.5T806-518q-9 145-77 236T526-143Z"/>
    </Icon>
  );
});

IconMaterialSpaW100Filled.displayName = 'OnesyIconMaterialSpaW100Filled';

export default IconMaterialSpaW100Filled;
