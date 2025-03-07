import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SickW100Filled'

      short_name='Sick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m336-518 61-62-62-62-19 19 43 42-43 43 20 20Zm504-98q-26 0-45-19t-19-45q0-23 11.5-47.5T840-812q41 60 52.5 84.5T904-680q0 26-19 45t-45 19Zm-215 98 20-20-43-43 42-42-19-19-62 62 62 62Zm-145 98q-28 0-56 8.5T371-385l-147-86q0-14-5-27t-17-20q-16-9-33.5-4.5T142-502q-9 16-4.5 33.5T158-442q12 7 26 5t26-9l139 80q-11 11-21 24t-18 30h32q21-36 57-58t81-22q45 0 81 22t57 58h32q-29-57-75.5-82.5T480-420Zm0 288q-72 0-135.5-27.5t-111-75Q186-282 159-345t-27-135q0-72 27-135t74.5-110.5q47.5-47.5 111-75T480-828q67 0 126 23.5T712-739q-6 15-9 29t-3 30q0 54 35 93t88 46q3 15 4 30t1 31q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Z"/>
    </Icon>
  );
});

IconMaterialSickW100Filled.displayName = 'OnesyIconMaterialSickW100Filled';

export default IconMaterialSickW100Filled;
