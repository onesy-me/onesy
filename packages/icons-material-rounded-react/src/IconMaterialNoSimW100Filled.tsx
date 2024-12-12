import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoSimW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimW100Filled'

      short_name='NoSim'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M347-711q-9-9-9-21t9-21l57-57q8-8 19.5-13t23.5-5h241q26 0 43 17t17 43v384q0 20-18.5 27.5T697-363L347-711Zm-75 579q-26 0-43-17t-17-43v-401q0-12 5-23.5t13-19.5l20-20-142-142q-4-4-4.5-9.5T108-818q5-5 10-5t10 5l698 698q4 4 4.5 9.5T826-100q-5 5-10 5t-10-5L680-226l20-20 48 48v6q0 26-17 43t-43 17H272Z"/>
    </Icon>
  );
});

IconMaterialNoSimW100Filled.displayName = 'OnesyIconMaterialNoSimW100Filled';

export default IconMaterialNoSimW100Filled;
