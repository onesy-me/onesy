import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationCityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationCityW100'

      short_name='LocationCity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-194v-448q0-13 8.5-21.5T256-672h130v-116q0-13 6.5-27.5T408-839l50-46q9-9 22-9t22 9l50 46q9 9 15.5 23.5T574-788v276h130q13 0 21.5 8.5T734-482v288q0 13-8.5 21.5T704-164H256q-13 0-21.5-8.5T226-194Zm28 2h132v-132H254v132Zm0-160h132v-132H254v132Zm0-160h132v-132H254v132Zm160 320h132v-132H414v132Zm0-160h132v-132H414v132Zm0-160h132v-132H414v132Zm0-160h132v-132H414v132Zm160 480h132v-132H574v132Zm0-160h132v-132H574v132Z"/>
    </Icon>
  );
});

IconMaterialLocationCityW100.displayName = 'OnesyIconMaterialLocationCityW100';

export default IconMaterialLocationCityW100;
