import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaPhotosphereW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaPhotosphereW100'

      short_name='PanoramaPhotosphere'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-166q-87 0-161-45T200-335q-26-8-48-17t-46-20q-7-3-10.5-9.5T92-396v-168q0-8 3.5-14.5T106-588q24-11 46-20t48-17q44-79 118-124t161-45q87 0 161 45t118 124q26 8 48 17t46 20q8 4 12 10.5t4 14.5v167q0 8-4 14.5t-12 9.5q-24 11-46 20t-48 17q-44 79-118 124t-161 45Zm0-28q75 0 135.5-34.5T719-324q-56 15-116.5 23.5T479-292q-63 0-123.5-8.5T239-324q44 61 104.5 95.5T479-194Zm1-286Zm-1-286q-75 0-135.5 34.5T239-636q56-15 116.5-23.5T479-668q63 0 123.5 8.5T719-636q-44-61-104.5-95.5T479-766Zm1 446q100 0 192-20.5T840-396v-168q-76-35-168-55.5T480-640q-100 0-192 20.5T120-564v168q76 35 168 55.5T480-320Z"/>
    </Icon>
  );
});

IconMaterialPanoramaPhotosphereW100.displayName = 'OnesyIconMaterialPanoramaPhotosphereW100';

export default IconMaterialPanoramaPhotosphereW100;
