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
      <path d="M479.78-788q72.22 0 146.72 22.5T761-702q13 9.37 19.5 22.66Q787-666.06 787-652q0 8.07-2.5 16.5T777-619L530-249q-9 13.5-22.5 20.25T479.88-222q-14.12 0-27.5-6.5T430-249L183-619q-5.38-8.25-7.69-16.5Q173-643.75 173-652q0-13.78 6.5-26.8Q186-691.81 199-701q60-41 134.28-64 74.27-23 146.5-23Zm-133.9 198q14.12 0 24.12-9.88 10-9.88 10-24T370.12-648q-9.88-10-24-10T322-648.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm134 204q14.12 0 24.12-9.88 10-9.88 10-24T504.12-444q-9.88-10-24-10T456-444.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaW100Filled.displayName = 'OnesyIconMaterialLocalPizzaW100Filled';

export default IconMaterialLocalPizzaW100Filled;
