import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksW100'

      short_name='Looks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-640q-145 0-249 99.5T120-298q0 7-3.5 12.5T106-280q-7 0-10.5-5.5T92-299q4-77 35.5-144t84-117Q264-610 333-639t147-29q78 0 147 29t121.5 79q52.5 50 84 117T868-299q0 8-3.5 13.5T854-280q-7 0-10.5-5.5T840-298q-7-143-111-242.5T480-640Zm0 160q-78 0-135.5 53.5T281-296q-1 7-5 11.5t-10 4.5q-6 0-10.5-4.5T252-295q6-90 71.5-151.5T480-508q91 0 156.5 61.5T708-295q1 6-3.5 10.5T694-280q-6 0-10-4.5t-5-11.5q-6-77-63-130.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialLooksW100.displayName = 'OnesyIconMaterialLooksW100';

export default IconMaterialLooksW100;
