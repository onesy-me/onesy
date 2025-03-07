import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCirclesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CirclesFilled'

      short_name='Circles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-920q100 0 170 70t70 170q0 100-70 170t-170 70q-100 0-170-70t-70-170q0-100 70-170t170-70ZM185-185q-51-51-78-117T80-440q0-106 56-193t152-132q29-12 54 5t20 45q-8 73 17 141.5T456-453q51 51 119 75.5T715-361q28-3 45 19t7 49q-44 97-132 155T440-80q-72 0-138-27t-117-78Z"/>
    </Icon>
  );
});

IconMaterialCirclesFilled.displayName = 'OnesyIconMaterialCirclesFilled';

export default IconMaterialCirclesFilled;
