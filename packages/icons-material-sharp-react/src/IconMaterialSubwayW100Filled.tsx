import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubwayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubwayW100Filled'

      short_name='Subway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-474q0-66 36.5-117t99.5-77q47-18 104-23t108-5q51 0 108 5t104 23q63 26 99.5 77T828-606v474H132Zm214-28 60-68h148l60 68h26v-20l-44-50q45-6 68.5-35.5T688-340v-260q0-51-54-70.5T480-690q-91 0-149.5 19.5T272-600v260q0 45 23.5 75t68.5 35l-44 50v20h26Zm-46-268v-172h360v172H300Zm297.82 120q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Zm-236 0q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialSubwayW100Filled.displayName = 'OnesyIconMaterialSubwayW100Filled';

export default IconMaterialSubwayW100Filled;
