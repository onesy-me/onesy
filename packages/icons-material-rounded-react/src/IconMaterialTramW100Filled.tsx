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
      <path d="M212-280v-360q0-66 71-86t181-22l30-60H298q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h364q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H526l-30 60q110 2 181 21.92 71 19.91 71 86.08v360q0 45-31.5 76.5T640-172l56 56q7 7 3.33 15.5-3.68 8.5-13.47 8.5-2.86 0-5.39-1T676-96l-76-76H360l-76 76q-2.08 2-4.79 3t-5.63 1q-9.58 0-13.08-8.5T264-116l56-56q-45 0-76.5-31.5T212-280Zm268.24 20q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM240-428h480v-196H240v196Z"/>
    </Icon>
  );
});

IconMaterialTramW100Filled.displayName = 'OnesyIconMaterialTramW100Filled';

export default IconMaterialTramW100Filled;
