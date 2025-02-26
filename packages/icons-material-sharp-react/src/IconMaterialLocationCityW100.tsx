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
      <path d="M226-164v-508h160v-146l94-88 94 88v306h160v348H226Zm28-28h132v-132H254v132Zm0-160h132v-132H254v132Zm0-160h132v-132H254v132Zm160 320h132v-132H414v132Zm0-160h132v-132H414v132Zm0-160h132v-132H414v132Zm0-160h132v-132H414v132Zm160 480h132v-132H574v132Zm0-160h132v-132H574v132Z"/>
    </Icon>
  );
});

IconMaterialLocationCityW100.displayName = 'OnesyIconMaterialLocationCityW100';

export default IconMaterialLocationCityW100;
