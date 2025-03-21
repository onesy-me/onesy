import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialColorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorsW100'

      short_name='Colors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M391-148 108-431l262-262-118-114 22-22 398 400-281 281Zm-1-525L147-429h487L390-673Zm377 501q-26 0-43-18t-17-44q0-20 8-39t22-35l30-36 32 36q14 16 22 35t8 39q0 26-18 44t-44 18Z"/>
    </Icon>
  );
});

IconMaterialColorsW100.displayName = 'OnesyIconMaterialColorsW100';

export default IconMaterialColorsW100;
