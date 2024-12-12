import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHttpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HttpW100'

      short_name='Http'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M78-376v-208h28v80h112v-80h28v208h-28v-100H106v100H78Zm288 0v-180h-70v-28h168v28h-70v180h-28Zm200 0v-180h-70v-28h168v28h-70v180h-28Zm148 0v-208h168v128H742v80h-28Zm28-108h112v-72H742v72Z"/>
    </Icon>
  );
});

IconMaterialHttpW100.displayName = 'OnesyIconMaterialHttpW100';

export default IconMaterialHttpW100;
