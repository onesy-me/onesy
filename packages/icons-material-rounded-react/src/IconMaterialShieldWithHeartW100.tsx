import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartW100'

      short_name='ShieldWithHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M359-510q0 42 42 80.5t69 64.5q5 4 10 4t9.71-3.82Q518-390 559.5-429q41.5-39 41.5-81 0-27-19.8-46.5Q561.41-576 534-576q-17 0-31.15 6.37Q488.71-563.25 480-552q-9-11.25-23.25-17.63Q442.5-576 426-576q-27 0-47 19.5T359-510Zm121 371q-5 0-11-1t-11.02-3Q345-188 278.5-291.5 212-395 212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 121-66.5 224.5T502.02-143q-5.02 2-11.02 3t-11 1Zm0-25q104-33 172-132t68-220v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 121 68 220t172 132Zm0-314Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHeartW100.displayName = 'OnesyIconMaterialShieldWithHeartW100';

export default IconMaterialShieldWithHeartW100;
