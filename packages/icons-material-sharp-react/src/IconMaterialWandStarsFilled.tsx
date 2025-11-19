import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWandStarsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WandStarsFilled'

      short_name='WandStars'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm520 520-80-80 80-80 80 80-80 80Z"/>
    </Icon>
  );
});

IconMaterialWandStarsFilled.displayName = 'OnesyIconMaterialWandStarsFilled';

export default IconMaterialWandStarsFilled;
