import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepOverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOverW100Filled'

      short_name='StepOver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.12-226q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM701-534q-28-65-87-105.5T480-680q-76.66 0-137.39 43.72Q281.88-592.56 256-524q-2.13 7.12-6.56 12.56Q245-506 238.2-506q-7.2 0-10.7-5.5Q224-517 226-523q26-81 94.5-133T479-708q75 0 136 37.5t96 97.5v-127q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v164q0 12.75-8.62 21.37Q721.75-506 709-506H545q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h156Z"/>
    </Icon>
  );
});

IconMaterialStepOverW100Filled.displayName = 'OnesyIconMaterialStepOverW100Filled';

export default IconMaterialStepOverW100Filled;
