import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSimCardDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadW100Filled'

      short_name='SimCardDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-382v-178q0-6-4-10t-10-4q-6 0-10 4t-4 10v178l-80-78q-5-4-10-4.5t-10 4.5q-5 5-5 10t5 10l93 93q9 9 21 9t21-9l93-93q4-4 4.5-9.5T594-460q-4-4-9.5-4t-10.5 4l-80 78ZM272-132q-26 0-43-17t-17-43v-401q0-12 5-23.5t13-19.5l174-174q8-8 19.5-13t23.5-5h241q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadW100Filled.displayName = 'OnesyIconMaterialSimCardDownloadW100Filled';

export default IconMaterialSimCardDownloadW100Filled;
