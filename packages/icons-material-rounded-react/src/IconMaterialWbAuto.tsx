import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbAuto'

      short_name='WbAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M267-432h112l21 57q2 7 8 11t13 4q12 0 18.5-9.5T442-390l-87-234q-3-8-9-12t-14-4h-18q-8 0-14 4t-9 12l-87 234q-4 11 2.5 20.5T225-360q8 0 13.5-4t7.5-11l21-57Zm14-40 40-116h4l40 116h-84Zm42 272q-117 0-198.5-81.5T43-480q0-117 81.5-198.5T323-760q78 0 144 40t102 109h-2q-3-11 4-20t18-9q8 0 14 4.5t8 12.5l44 187h2l54-189q2-7 7.5-11t12.5-4h12q7 0 12.5 4t7.5 11l54 189h4l44-187q2-8 8-12.5t14-4.5q11 0 18 9t4 20l-62 235q-2 8-7.5 12t-13.5 4h-12q-8 0-14-4.5t-8-11.5l-55-194h-2l-53 194q-2 8-8 12t-14 4h-11q-8 0-14-4.5t-8-12.5l-24-99q0 115-82 195.5T323-200Zm0-80q83 0 141.5-58.5T523-480q0-83-58.5-141.5T323-680q-83 0-141.5 58.5T123-480q0 83 58.5 141.5T323-280Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialWbAuto.displayName = 'OnesyIconMaterialWbAuto';

export default IconMaterialWbAuto;
