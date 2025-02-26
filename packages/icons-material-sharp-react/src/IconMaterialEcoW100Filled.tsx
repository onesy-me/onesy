import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEcoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcoW100Filled'

      short_name='Eco'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-132q-40 0-78.5-11T298-176q24-89 72-166.5T488-480q-80 49-139 121t-79 163q-5-4-9-7.5t-9-8.5q-38-40-59-89t-21-101q0-58 22.5-110.5T258-606q68-68 173-88.5t315-9.5q14 201-8 309.5T648-218q-40 42-91.5 64T450-132Z"/>
    </Icon>
  );
});

IconMaterialEcoW100Filled.displayName = 'OnesyIconMaterialEcoW100Filled';

export default IconMaterialEcoW100Filled;
