import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTsunamiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TsunamiW100Filled'

      short_name='Tsunami'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-188q-30 20-64 31t-69 11q-36 0-69.5-11.5T213-187q-22 13-45 22.5T120-150q-5 1-9.5-3t-4.5-9q0-6 4-10t10-6q20-4 38-12.5t35-19.5q9-6 20-6t20 6q26 16 55 25.5t59 9.5q29 0 57-7.5t53-22.5q11-7 24.5-7t24.5 7q25 15 52.5 22.5T615-175q32 0 62-10.5t56-27.5q8-5 16-4.5t16 5.5q17 11 36 19.5t39 13.5q6 2 10 6.5t4 10.5q0 6-4.5 10t-10.5 2q-24-5-46.5-15T749-187q-31 18-64.5 29.5T615-146q-36 0-70-11.5T480-188Zm-374-88v-104q0-92 35.5-167t97-128.5Q300-729 383-758.5T560-788q11 0 22.5.5T605-786q14 2 22 14t3 26q-8 22-12 39t-4 40q0 66 46.5 112.5T773-508h67q6 0 10 4t4 10q0 6-4 10t-10 4h-67q-78 0-132.5-54.5T586-667q0-23 5.5-49.5T605-763q-103 16-167 87t-64 163q0 60 16 104t43 86l32-19q8-5 16-5t16 5q26 17 56 28t62 11q32 0 62-12t56-28q8-5 16-4.5t16 5.5l28 17q11 6 23 10.5t24 7.5q6 2 10 6.5t4 10.5q0 6-5 9.5t-10 1.5q-21-5-43.5-15T749-318q-36 22-69.5 33T615-274q-32 0-68.5-13T481-318q-35 21-65 32.5T347-274q-40 0-70.5-10.5T213-315q-27 16-54 25.5T106-276Z"/>
    </Icon>
  );
});

IconMaterialTsunamiW100Filled.displayName = 'OnesyIconMaterialTsunamiW100Filled';

export default IconMaterialTsunamiW100Filled;
