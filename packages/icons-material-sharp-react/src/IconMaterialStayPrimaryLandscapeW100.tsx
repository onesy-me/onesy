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
      <path d="M92-252v-456h776v456H92Zm94-28v-400h-66v400h66Zm28 0h532v-400H214v400Zm560 0h66v-400h-66v400ZM186-680h-66 66Zm588 0h66-66Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscapeW100.displayName = 'OnesyIconMaterialStayPrimaryLandscapeW100';

export default IconMaterialStayPrimaryLandscapeW100;
