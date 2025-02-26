import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWoundsInjuriesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WoundsInjuriesFilled'

      short_name='WoundsInjuries'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m136-80-56-56 88-88-88-24 21-77 87 24-23-88 77-21 24 88 137-137-88-24 21-77 87 23-23-87 77-21 24 88 137-137-88-24 21-77 88 23-24-87 77-21 24 88 88-88 56 56-88 88 88 24-21 77-87-24 23 88-77 21-24-88-137 137 88 24-21 77-87-23 23 87-77 21-24-88-137 137 88 24-21 77-88-23 24 87-77 21-24-88-88 88Z"/>
    </Icon>
  );
});

IconMaterialWoundsInjuriesFilled.displayName = 'OnesyIconMaterialWoundsInjuriesFilled';

export default IconMaterialWoundsInjuriesFilled;
