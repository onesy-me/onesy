import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFaceRetouchingOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRetouchingOff'

      short_name='FaceRetouchingOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m786-104-60-60q-51 39-113 61.5T482-80q-82 0-155-31.5t-127.5-86Q145-252 113.5-325T82-480q0-69 22.5-131.5T166-725l-60-59q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm96-376q0 37-6 72t-19 68q-3 8-8.5 13.5t-13 8.5q-7.5 3-15.5 2.5t-16-3.5q-15-7-20.5-22.5T783-373q9-26 14-52.5t5-54.5q0-24-3-46.5T788-570q-21 5-42 7.5t-44 2.5q-56 0-106.5-14.5T500-616L336-780q-19-19-14-44.5t29-34.5q31-11 63.5-16t67.5-5q83 0 155.5 31.5t127 85.5q54.5 54 86 127T882-480ZM590-720ZM179-581q21-12 39-26.5t35-31.5l-30-29q-14 20-25 41.5T179-581Zm247-214q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM216-625Zm146 235q-21 0-35.5-14.5T312-440q0-21 14.5-35.5T362-490q21 0 35.5 14.5T412-440q0 21-14.5 35.5T362-390Zm120 230q53 0 100-15.5t86-44.5L309-581q-30 32-67.5 56T162-486v6q0 133 93.5 226.5T482-160Z"/>
    </Icon>
  );
});

IconMaterialFaceRetouchingOff.displayName = 'OnesyIconMaterialFaceRetouchingOff';

export default IconMaterialFaceRetouchingOff;
