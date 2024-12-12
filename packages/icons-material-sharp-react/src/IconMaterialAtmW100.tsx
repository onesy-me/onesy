import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAtmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmW100'

      short_name='Atm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-376v-180h-90v-28h208v28h-90v180h-28Zm-320 0v-208h168v208h-28v-70H134v70h-28Zm28-98h112v-82H134v82Zm472 98v-208h248v208h-28v-180h-82v140h-28v-140h-82v180h-28Z"/>
    </Icon>
  );
});

IconMaterialAtmW100.displayName = 'OnesyIconMaterialAtmW100';

export default IconMaterialAtmW100;
