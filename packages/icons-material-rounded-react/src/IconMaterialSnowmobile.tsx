import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowmobile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Snowmobile'

      short_name='Snowmobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240h240q33 0 56.5-23.5T400-320l-110-33L80-240Zm332-160h331q27 0 42-6.5t15-23.5L621-596 463-477l-337-37-12 24 298 90Zm45-98Zm493 258q0 6-2 12t-5 11q-16 26-43.5 41.5T840-160H640q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h77l-80-80H480q0 66-47 113t-113 47H80q-38 0-59-25T0-240q0-20 10-39t32-31l140-76-113-34q-27-8-38.5-33.5T32-504l29-59q8-17 25-25.5t36-6.5l318 35 122-91-32-29h-50q-17 0-28.5-11.5T440-720q0-17 11.5-28.5T480-760h51q15 0 29 5t25 16l262 244q19 17 26 33.5t7 31.5q0 43-33 76.5T747-320l86 80h7q10 0 19-4.5t14-12.5q6-10 15.5-16.5T909-280q17 0 29 11.5t12 28.5Z"/>
    </Icon>
  );
});

IconMaterialSnowmobile.displayName = 'OnesyIconMaterialSnowmobile';

export default IconMaterialSnowmobile;
