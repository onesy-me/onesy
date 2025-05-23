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
      <path d="M106-148v-28q29-4 54.5-16t52.5-31q31 23 65.5 35.5T347-175q32 0 68-11.5t66-34.5q32 24 66 35t68 11q35 0 66-11t68-37q29 21 54.5 32t50.5 15v28q-24-3-50-12.5T749-187q-36 22-70 31.5t-64 9.5q-29 0-64-10t-71-32q-33 22-67 32t-66 10q-31 0-65-10t-69-31q-27 16-54 25.5T106-148Zm0-128v-104q0-92 35.5-167t97-128.5Q300-729 383-758.5T560-788q21 0 42.5 1.5T643-782q-14 29-21.5 59t-7.5 56q0 66 46.5 112.5T773-508h81v28h-81q-78 0-132.5-54.5T586-667q0-23 5.5-49.5T605-763q-103 16-167 87t-64 163q0 60 16 104t43 86q11-5 24-13.5t24-15.5q32 23 68 36t66 13q30 0 66-13t68-36q25 17 51 30t54 18v28q-24-3-50-14t-55-28q-36 22-69.5 33T615-274q-32 0-68.5-13T481-318q-35 21-65 32.5T347-274q-40 0-70.5-10.5T213-315q-27 16-54 25.5T106-276Z"/>
    </Icon>
  );
});

IconMaterialTsunamiW100Filled.displayName = 'OnesyIconMaterialTsunamiW100Filled';

export default IconMaterialTsunamiW100Filled;
