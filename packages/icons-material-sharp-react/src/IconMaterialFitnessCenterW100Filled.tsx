import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitnessCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessCenterW100Filled'

      short_name='FitnessCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m546-110-30-30 142-142-376-376-142 142-30-30 58-58-30-30 84-84-56-56 20-20 56 56 84-84 30 30 58-58 30 30-142 142 376 376 142-142 30 30-58 58 30 30-84 84 56 56-20 20-56-56-84 84-30-30-58 58Z"/>
    </Icon>
  );
});

IconMaterialFitnessCenterW100Filled.displayName = 'OnesyIconMaterialFitnessCenterW100Filled';

export default IconMaterialFitnessCenterW100Filled;
