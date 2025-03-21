import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStadiumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StadiumW100'

      short_name='Stadium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M196-680v-128l128 64-128 64Zm480 0v-128l128 64-128 64Zm-224-32v-128l128 64-128 64Zm-38 595q-67-3-120-11.5t-90.5-21Q166-162 146-177.5T126-210v-320q0-20 26-37t73-29.5q47-12.5 112-20t143-7.5q78 0 143 7.5t112 20q47 12.5 73 29.5t26 37v320q0 17-20 32.5t-57.5 28Q719-137 666-128.5T546-117v-159H414v159Zm66-347q100 0 191.5-17T806-527q-17-26-101.5-47.5T480-596q-140 0-224.5 21.5T154-527q43 29 123 46t203 17Zm-94 317v-157h188v157q99-7 158.5-25.5T806-210v-286q-69 33-149 46.5T480-436q-97 0-177-13.5T154-496v286q14 19 67.5 37.5T386-147Zm94-175Z"/>
    </Icon>
  );
});

IconMaterialStadiumW100.displayName = 'OnesyIconMaterialStadiumW100';

export default IconMaterialStadiumW100;
