import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SickW100'

      short_name='Sick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-596q36-102 125-167t203-65q67 0 126 23.5T712-739q-3 8-5 15.5t-4 14.5q-44-42-101-66.5T480-800q-101 0-181 56.5T183-599q-8 0-15.5.5T152-596Zm328 464q-114 0-203-64.5T152-363q8 2 15.5 2.5t15.5.5q36 88 116 144t181 56q133 0 226.5-93.5T800-480q0-17-1.5-34t-5.5-34q8 2 15 4t15 3q3 15 4 30t1 31q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132ZM336-518l61-62-62-62-19 19 43 42-43 43 20 20Zm504-98q-26 0-45-19t-19-45q0-23 11.5-47.5T840-812q41 60 52.5 84.5T904-680q0 26-19 45t-45 19Zm-215 98 20-20-43-43 42-42-19-19-62 62 62 62Zm-145 98q-28 0-56 8.5T371-385l-147-86q0-14-5-27t-17-20q-16-9-33.5-4.5T142-502q-9 16-4.5 33.5T158-442q12 7 26 5t26-9l139 80q-11 11-21 24t-18 30h32q21-36 57-58t81-22q45 0 81 22t57 58h32q-29-57-75.5-82.5T480-420Zm0-60Z"/>
    </Icon>
  );
});

IconMaterialSickW100.displayName = 'OnesyIconMaterialSickW100';

export default IconMaterialSickW100;
