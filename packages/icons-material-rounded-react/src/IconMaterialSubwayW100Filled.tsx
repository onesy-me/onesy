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
      <path d="M132-192v-414q0-66 36.5-117t99.5-77q47-18 104-23t108-5q51 0 108 5t104 23q63 26 99.5 77T828-606v414q0 24.75-17.62 42.37Q792.75-132 768-132H192q-24.75 0-42.37-17.63Q132-167.25 132-192Zm168-236v-172h360v172H300Zm297.82 120q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Zm-236 0q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM406-228h148l55 62q2 3 5.12 4.5t6.53 1.5q11.35 0 15.85-9.5T634-187l-38-43q45-6 68.5-35.5T688-340v-260q0-51-54-70.5T480-690q-91 0-149.5 19.5T272-600v260q0 45 23.5 75t68.5 35l-38 43q-7 8-2.61 17.5 4.39 9.5 16.1 9.5 3.51 0 6.51-2t5-4l55-62Z"/>
    </Icon>
  );
});

IconMaterialSubwayW100Filled.displayName = 'OnesyIconMaterialSubwayW100Filled';

export default IconMaterialSubwayW100Filled;
