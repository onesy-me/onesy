import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExploreOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOffW100'

      short_name='ExploreOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m572-500-72-72 166-94-94 166Zm222 374-89-89q-46 39-103 61t-122 22q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-65 22-122t61-103l-89-89 20-20 668 668-20 20Zm-18-170-21-21q22-36 33.5-77t11.5-86q0-133-93.5-226.5T480-800q-45 0-86 11.5T317-755l-21-21q40.73-25.21 86.87-38.61Q429-828 480-828q72.21 0 135.72 27.41 63.51 27.4 110.49 74.38t74.38 110.49Q828-552.21 828-480q0 51-13.39 97.13Q801.21-336.73 776-296ZM536-536Zm-76 76Zm20 300q59 0 111-20t94-55L506-414 294-294l120-212-179-179q-35 42-55 94t-20 111q0 133 93.5 226.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialExploreOffW100.displayName = 'OnesyIconMaterialExploreOffW100';

export default IconMaterialExploreOffW100;
