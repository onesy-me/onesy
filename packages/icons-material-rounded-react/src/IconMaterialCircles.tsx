import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCircles = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Circles'

      short_name='Circles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T80-440q0-97 47-180t131-129q22-12 45-2.5t34 33.5q10 22 0 44t-31 35q-52 31-79 85t-27 114q0 100 70 170t170 70q60 0 115-26.5t84-79.5q12-22 33.5-34t44.5-4q26 9 37 32t0 46q-45 88-130 137T440-80Zm240-840q100 0 170 70t70 170q0 100-70 170t-170 70q-100 0-170-70t-70-170q0-100 70-170t170-70Zm0 360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120ZM433-433Z"/>
    </Icon>
  );
});

IconMaterialCircles.displayName = 'OnesyIconMaterialCircles';

export default IconMaterialCircles;
