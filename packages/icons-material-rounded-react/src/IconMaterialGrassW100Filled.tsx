import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GrassW100Filled'

      short_name='Grass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M174-240q-6 0-10-4t-4-10q0-6 4-10t10-4h170q-14-57-44.5-92T223-427q-16-11-14.5-21t21.5-12q98-6 174 55.5T480-240H174Zm334 0q0-14-1.5-30.5T500-304q32-67 92-111t137-45q22 0 23.5 11T737-427q-44 27-75 64.5T616-268h170q6 0 10 4t4 10q0 6-4 10t-10 4H508Zm-16-93q-19-106 25.5-186.5T646-633q23-9 32 .5T668-603q-35 36-54.5 76.5T586-446q-29 16-58.5 50T492-333Zm-30-49q-14-20-37-40t-47-31q3-9 4.5-22.5T384-502q0-40-8.5-77T351-650q-11-22 2-29t30 8q35 29 60.5 71.5T480-502q-11 26-15 59t-3 61Z"/>
    </Icon>
  );
});

IconMaterialGrassW100Filled.displayName = 'OnesyIconMaterialGrassW100Filled';

export default IconMaterialGrassW100Filled;
