import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalDrinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkW100Filled'

      short_name='LocalDrink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m251-132-79-696h616l-78 696H251Zm-28-488h515l18-180H203l20 180Zm257 374q37 0 62.5-25.5T568-334q0-29-17-61.5T480-500q-54 72-71 104.5T392-334q0 37 25.5 62.5T480-246Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkW100Filled.displayName = 'OnesyIconMaterialLocalDrinkW100Filled';

export default IconMaterialLocalDrinkW100Filled;
