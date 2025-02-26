import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayPrimaryLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscapeW100'

      short_name='StayPrimaryLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h656q26 0 43 17t17 43v336q0 26-17 43t-43 17H152Zm34-28v-400h-34q-12 0-22 10t-10 22v336q0 12 10 22t22 10h34Zm28 0h532v-400H214v400Zm560 0h34q12 0 22-10t10-22v-336q0-12-10-22t-22-10h-34v400ZM186-680h-66 66Zm588 0h66-66Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscapeW100.displayName = 'OnesyIconMaterialStayPrimaryLandscapeW100';

export default IconMaterialStayPrimaryLandscapeW100;
