import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPizzaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaW100Filled'

      short_name='LocalPizza'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-174 150-668q72-55 155.5-87.5T480-788q91 0 174.5 32T810-668L480-174ZM345.88-590q14.12 0 24.12-9.88 10-9.88 10-24T370.12-648q-9.88-10-24-10T322-648.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm134 204q14.12 0 24.12-9.88 10-9.88 10-24T504.12-444q-9.88-10-24-10T456-444.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaW100Filled.displayName = 'OnesyIconMaterialLocalPizzaW100Filled';

export default IconMaterialLocalPizzaW100Filled;
