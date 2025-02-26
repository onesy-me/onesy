import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkManage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkManage'

      short_name='NetworkManage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-389q-18-18-16.5-43.5T217-473q57-42 124-64.5T480-560h23.5q11.5 0 23.5 2 25 2 41 21t14 44q-2 25-21 41t-44 14q-9-1-18.5-1.5T480-440q-49 0-94 14t-85 41q-21 14-46.5 14T212-389Zm268-411q119 0 230.5 40T913-644q20 17 21.5 42.5T918-558q-18 18-43 17.5T830-557q-75-60-164-91.5T480-680q-97 0-186 31.5T130-557q-20 16-45 16.5T42-558q-18-18-16.5-43.5T47-644q91-76 202.5-116T480-800Zm188 700q-12-5-22.5-10.5T624-124l-29 9q-13 4-25.5-1T550-132l-8-14q-7-12-5-26t13-23l22-19q-2-12-2-26t2-26l-22-19q-11-9-13-22.5t5-25.5l9-15q7-11 19-16t25-1l29 9q11-8 21.5-13.5T668-380l6-29q3-14 13.5-22.5T712-440h16q14 0 24.5 9t13.5 23l6 28q12 5 22.5 10.5T816-356l29-9q13-4 25.5 1t19.5 16l8 14q7 12 5 26t-13 23l-22 19q2 12 2 26t-2 26l22 19q11 9 13 22.5t-5 25.5l-9 15q-7 11-19 16t-25 1l-29-9q-11 8-21.5 13.5T772-100l-6 29q-3 14-13.5 22.5T728-40h-16q-14 0-24.5-9T674-72l-6-28Zm52-220q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320Zm-324 76q0-33 20-58t52-25q5 0 8.5 4.5t3.5 9.5v138q0 5-3.5 9.5T468-161q-32 0-52-25t-20-58Z"/>
    </Icon>
  );
});

IconMaterialNetworkManage.displayName = 'OnesyIconMaterialNetworkManage';

export default IconMaterialNetworkManage;
