import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadW100Filled'

      short_name='Download'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-354q-6 0-11-2t-10-7l-93-93q-4-4-4.5-9.5T366-476q5-5 10-5t10 5l80 80v-338q0-6 4-10t10-4q6 0 10 4t4 10v338l80-80q4-4 9.5-4.5T594-476q5 5 5 10t-5 10l-93 93q-5 5-10 7t-11 2ZM272-212q-26 0-43-17t-17-43v-76q0-6 4-10t10-4q6 0 10 4t4 10v76q0 12 10 22t22 10h416q12 0 22-10t10-22v-76q0-6 4-10t10-4q6 0 10 4t4 10v76q0 26-17 43t-43 17H272Z"/>
    </Icon>
  );
});

IconMaterialDownloadW100Filled.displayName = 'OnesyIconMaterialDownloadW100Filled';

export default IconMaterialDownloadW100Filled;
