import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYakitoriFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YakitoriFilled'

      short_name='Yakitori'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m670-234-85 85q-23 23-56.5 23T472-149l-57-56q-23-23-23-56.5t23-56.5l-56-57q-23 23-56.5 23T246-375l-57-56q-23-23-23-56.5t23-56.5l-56-57q-23-23-23-56.5t23-56.5l28-28-73-73q-12-12-12-28.5T88-872q12-12 28.5-12t28.5 12l73 74 28-28q23-23 57-23t57 23l56 56q23-23 56.5-23t56.5 23l57 56q23 23 23 57t-23 57l56 56q23-23 56.5-23t56.5 23l57 56q23 23 23 57t-23 57l-85 84 144 145q12 12 12 28t-12 28q-12 12-28 12t-28-12L670-234Z"/>
    </Icon>
  );
});

IconMaterialYakitoriFilled.displayName = 'OnesyIconMaterialYakitoriFilled';

export default IconMaterialYakitoriFilled;
