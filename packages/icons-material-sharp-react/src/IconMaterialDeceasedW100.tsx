import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeceasedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeceasedW100'

      short_name='Deceased'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M458-170q-9-26.24-23-48.44-14-22.21-33-41.38Q383-279 361-293t-48-23q2 29 14 54t32 45q20 20 45 32t54 15Zm43 0q29-2 54.28-14t45.5-32Q621-236 633-261.5t14-54.5q-25.76 9-48.06 23-22.29 14-41.11 33-18.83 19-33.21 41.5Q510.24-196 501-170Zm-21-320q63 0 106.5-43.5T630-640v-78l-70 59-80-109-80 109-70-59v78q0 63 43.5 106.5T480-490Zm-8 348q-78.33 0-133.17-54.83Q284-251.67 284-330v-22q61 13 110 50.5t72 89.5v-250q-69-5-116.5-56T302-640v-139l94 81 84-113 84 113 94-81v139q0 71-47.5 122T494-462v249q23-51 71.5-88.5T674-352v22q0 78.33-54.54 133.17Q564.92-142 487-142h-15Zm8-487Zm94 386Zm-188 0Z"/>
    </Icon>
  );
});

IconMaterialDeceasedW100.displayName = 'OnesyIconMaterialDeceasedW100';

export default IconMaterialDeceasedW100;
