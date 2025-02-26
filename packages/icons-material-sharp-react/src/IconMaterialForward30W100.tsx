import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward30W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward30W100'

      short_name='Forward30'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M302-336v-28h120v-62h-90v-28h90v-62H302v-28h148v208H302Zm208 0v-208h148v208H510Zm28-28h92v-152h-92v152Zm-57.94 232Q416-132 360-156t-98-66q-42-42-66-97.94-24-55.95-24-120Q172-504 196-560t66-98q42-42 97.96-66 55.96-24 120.04-24h18l-68-68 20-20 102 101-100 101-20-20 66-66h-18q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440h28q0 64-24 120t-66 98q-42 42-97.94 66-55.95 24-120 24Z"/>
    </Icon>
  );
});

IconMaterialForward30W100.displayName = 'OnesyIconMaterialForward30W100';

export default IconMaterialForward30W100;
