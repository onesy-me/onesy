import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagicTether = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicTether'

      short_name='MagicTether'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 496q75 0 142.5 23.5T745 585q20 15 20.5 40T748 668q-17 17-42 17.5T661 672q-38-26-84-41t-97-15q-51 0-97 15t-84 41q-20 14-45 13.5T212 668q-17-18-17-42.5t20-39.5q55-42 122.5-66T480 496Zm0-240q125 0 235.5 41.5T914 413q20 17 20.5 42T917 498q-17 17-42 17.5T830 500q-72-59-161-91.5T480 376q-100 0-189 32.5T130 500q-20 16-45 15t-42-18q-18-18-17.5-42.5T46 413q88-74 198.5-115.5T480 256Zm-50 610-70-32q-12-5-12-18t12-18l70-32 32-70q5-12 18-12t18 12l32 70 70 32q12 5 12 18t-12 18l-70 32-32 70q-5 12-18 12t-18-12l-32-70Z"/>
    </Icon>
  );
});

IconMaterialMagicTether.displayName = 'OnesyIconMaterialMagicTether';

export default IconMaterialMagicTether;
