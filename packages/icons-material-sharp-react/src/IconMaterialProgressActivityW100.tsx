import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProgressActivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProgressActivityW100'

      short_name='ProgressActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.68-132q-71.68 0-135.04-27.34-63.36-27.34-110.66-74.64t-74.64-110.66Q132-408 132-479.68q0-72.56 27.5-135.94Q187-679 234-726q47-47 110.71-74.5Q408.43-828 480-828v28q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480h28q0 71.57-27.5 135.29Q773-281 726-234q-47 47-110.38 74.5Q552.24-132 479.68-132Z"/>
    </Icon>
  );
});

IconMaterialProgressActivityW100.displayName = 'OnesyIconMaterialProgressActivityW100';

export default IconMaterialProgressActivityW100;
