import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrassW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GrassW100'

      short_name='Grass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-28h184q-17-68-66.5-117.5T160-452q16-4 31.5-6t32.5-2q107 0 181.5 56.5T480-240H160Zm348 0q0-14-1.5-30.5T500-304q30-63 89-109.5T736-460q17 0 32.5 2t31.5 6q-68 17-117 66.5T616-268h184v28H508Zm-16-93q-11-65 2-121t45-98q32-42 80.5-68.5T727-651q-66 42-98 96.5T586-446q-29 16-58.5 50T492-333Zm-30-49q-14-20-37-40t-47-31q3-9 4.5-22.5T384-502q0-61-19.5-115T310-716q59 24 106 78t64 136q-11 26-15 59t-3 61Z"/>
    </Icon>
  );
});

IconMaterialGrassW100.displayName = 'OnesyIconMaterialGrassW100';

export default IconMaterialGrassW100;
