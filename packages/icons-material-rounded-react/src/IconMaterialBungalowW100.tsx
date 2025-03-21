import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBungalowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowW100'

      short_name='Bungalow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M362-172q-13 0-21.5-8.5T332-202v-249l-42 67q-3 5-8.5 6t-10.5-2q-5-3-6-8.5t2-10.5l187-302q5-7 11.5-10.5T480-715q8 0 14 3.5t11 10.5l188 302q3 5 1.5 10.5T688-380q-5 3-10.5 2t-8.5-6l-41-66v248q0 13-8.5 21.5T598-172H362Zm-2-28h92v-80q0-11 8-19.5t20-8.5q11 0 19.5 8.5T508-280v80h92v-295L480-688 360-496v296Zm0 0h240-240Zm120-200q-11 0-19.5-8.5T452-428q0-11 8.5-19.5T480-456q11 0 19.5 8.5T508-428q0 11-8.5 19.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialBungalowW100.displayName = 'OnesyIconMaterialBungalowW100';

export default IconMaterialBungalowW100;
