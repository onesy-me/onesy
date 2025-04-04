import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPublicOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublicOffW100'

      short_name='PublicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 705-215q-46 39-103 61t-122 22q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-65 22-122t61-103L90-830l20-20L872-88l-20 20Zm-412-94v-78h-80v-120L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm336-134-21-21q22-37 33.5-78.05 11.5-41.04 11.5-84.63 0-99.32-54-180.82T600-778v98H440v48L296-776q40-25 86.32-38.5Q428.63-828 480-828q72.21 0 135.72 27.41 63.51 27.4 110.49 74.38t74.38 110.49Q828-552.21 828-480q0 51.37-13.5 97.68Q801-336 776-296Z"/>
    </Icon>
  );
});

IconMaterialPublicOffW100.displayName = 'OnesyIconMaterialPublicOffW100';

export default IconMaterialPublicOffW100;
