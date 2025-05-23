import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataUsage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataUsage'

      short_name='DataUsage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-130 75-234t199-145q29-10 53.5 7t24.5 46q0 20-11.5 36.5T391-747q-86 27-138.5 100.5T200-480q0 117 81.5 198.5T480-200q52 0 100.5-18t86.5-52q15-14 36.5-14t36.5 14q23 21 24 47.5T742-176q-54 47-120.5 71.5T480-80Zm280-400q0-92-53-165.5T568-747q-18-6-29.5-22.5T527-806q0-29 24.5-46t53.5-7q125 42 200 146t75 233q0 18-1.5 36.5T873-403q-5 29-29.5 41.5T790-360q-19-7-29.5-25.5T754-424q3-17 4.5-30t1.5-26Z"/>
    </Icon>
  );
});

IconMaterialDataUsage.displayName = 'OnesyIconMaterialDataUsage';

export default IconMaterialDataUsage;
