import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestTagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestTagW100'

      short_name='NestTag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-95.27 0-161.64-66.46Q252-264.93 252-360.34q0-76.66 47.85-138.33Q347.7-560.33 426-582v-242q0-12 8.63-21 8.62-9 21.37-9h48q12 0 21 9t9 21v242q77 22 125.5 83.5T708-360.34q0 95.41-66.77 161.88Q574.46-132 480-132Zm0-28q83 0 141.5-58T680-360q0-83-58.5-141.5T480-560q-84 0-142 58.5T280-360q0 84 58 142t142 58Z"/>
    </Icon>
  );
});

IconMaterialNestTagW100.displayName = 'OnesyIconMaterialNestTagW100';

export default IconMaterialNestTagW100;
