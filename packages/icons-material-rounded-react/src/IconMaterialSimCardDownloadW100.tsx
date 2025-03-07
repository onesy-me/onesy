import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSimCardDownloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadW100'

      short_name='SimCardDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-382v-178q0-6-4-10t-10-4q-6 0-10 4t-4 10v178l-80-78q-5-4-10-4.5t-10 4.5q-5 5-5 10t5 10l93 93q9 9 21 9t21-9l93-93q4-4 4.5-9.5T594-460q-4-4-9.5-4t-10.5 4l-80 78ZM272-132q-26 0-43-17t-17-43v-401q0-12 5-23.5t13-19.5l174-174q8-8 19.5-13t23.5-5h241q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Zm0-28h416q12 0 22-10t10-22v-576q0-12-10-22t-22-10H434L240-606v414q0 12 10 22t22 10Zm0 0h-32 480-448Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadW100.displayName = 'OnesyIconMaterialSimCardDownloadW100';

export default IconMaterialSimCardDownloadW100;
