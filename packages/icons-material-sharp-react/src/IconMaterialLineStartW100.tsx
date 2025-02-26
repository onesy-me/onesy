import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartW100'

      short_name='LineStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-406q-31.08 0-52.54-21.44Q106-448.89 106-479.94q0-31.06 21.46-52.56Q148.92-554 180-554q27 0 47.5 17t25.5 43h601v28H253q-5 26-25.5 43T180-406Z"/>
    </Icon>
  );
});

IconMaterialLineStartW100.displayName = 'OnesyIconMaterialLineStartW100';

export default IconMaterialLineStartW100;
