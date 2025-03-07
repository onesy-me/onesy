import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTramW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TramW100Filled'

      short_name='Tram'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-280v-360q0-66 71-86t181-22l30-60H284v-28h392v28H526l-30 60q110 2 181 21.92 71 19.91 71 86.08v360q0 45-31.5 76.5T640-172l60 60v20h-20l-80-80H360l-80 80h-20v-20l60-60q-45 0-76.5-31.5T212-280Zm268.24 20q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM240-428h480v-196H240v196Z"/>
    </Icon>
  );
});

IconMaterialTramW100Filled.displayName = 'OnesyIconMaterialTramW100Filled';

export default IconMaterialTramW100Filled;
