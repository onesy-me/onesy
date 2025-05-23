import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFootBonesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FootBonesW100Filled'

      short_name='FootBones'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M167-181q-26 0-45-19t-19-45v-40q0-26 19-45t45-19q26 0 45 19t19 45v40q0 26-19 45t-45 19Zm675 11h-57q-8 0-12-5.5t-2-13.5l9-32q2-5 7-8.5t10-2.5l49 7q11 2 17.5 9t6.5 18q0 11-8.5 19.5T842-170Zm-149-15-105-35q-6-2-9-8t0-12l26-59q3-6 9-8t12 1l88 51q5 2 6.5 6.5t.5 9.5l-9 43q-2 7-7 10t-12 1Zm-186-70-74-19q-10-2-16.5-10t-6.5-19v-37q0-17 5-33.5t17-27.5q5-5 12.5-5t14.5 4l89 49q5 3 7 8.5t0 10.5l-31 71q-2 5-7 7.5t-10 .5Zm-203-35q-5 0-9.5-4.5T289-306q-7-48-43.5-76T160-410h-20q-5 0-7.5-2.5T130-420q0-5 2.5-7.5t7.5-2.5h36q19 0 36.5-5t34.5-14q6-3 12.5-3t12.5 3q20 10 39 14.5t41 4.5q9 0 13 8t0 16q-8 15-11.5 32t-3.5 34v35q0 6-4.5 10.5T335-290h-31ZM177-492q-30 0-50.5-21T106-563q0-14 5-27t15-23l60-59v-58q0-13 8.5-21.5T216-760h88q13 0 21.5 8.5T334-730v58l60 59q10 10 15 23t5 27q0 29-20.5 50T343-492q-16 0-28.5-6T291-514q-7-5-14.5-9.5T260-528q-8 0-32 14-11 9-24 15.5t-27 6.5Z"/>
    </Icon>
  );
});

IconMaterialFootBonesW100Filled.displayName = 'OnesyIconMaterialFootBonesW100Filled';

export default IconMaterialFootBonesW100Filled;
