import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCachedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CachedW100Filled'

      short_name='Cached'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-186q-123 0-209.5-86T186-480v-70l-80 80q-4 4-9.5 4.5T86-470q-5-5-5-10t5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.5T314-470q-5 5-10 5t-10-5l-80-80v70q0 111 78 188.5T482-214q20 0 40.5-3t40.5-10q6-2 11.5.5t7.5 7.5q2 5-.5 10.5T573-201q-22 8-45 11.5t-46 3.5Zm-4-560q-20 0-40.5 3T397-733q-6 2-11.5-.5T378-741q-2-5 0-10.5t8-7.5q22-8 45.5-11.5T478-774q123 0 209.5 86T774-480v70l80-80q4-4 9.5-4.5T874-490q5 5 5 10t-5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-9.5T646-490q5-5 10-5t10 5l80 80v-70q0-111-78-188.5T478-746Z"/>
    </Icon>
  );
});

IconMaterialCachedW100Filled.displayName = 'OnesyIconMaterialCachedW100Filled';

export default IconMaterialCachedW100Filled;
