import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheerW100'

      short_name='Cheer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m322-771-30-89 26-9 30 89-26 9Zm144-45v-88h28v88h-28Zm172 45-26-9 30-89 26 9-30 89ZM851-65l4-28-252-39-42-135 35-76 35 108 27-9-110-339 32-18 188 360h89v-28h-72L591-640l-76 44 69 213-53 115 51 161 269 42ZM631-235l-47-148 47 148Zm27-9ZM109-65l-4-28 252-39 42-135-35-76-35 108-27-9 109-339-31-18-188 360h-89v-28h72l194-371 76 44-69 213 53 115-52 161-268 42Zm220-170 47-148-47 148Zm-27-9Z"/>
    </Icon>
  );
});

IconMaterialCheerW100.displayName = 'OnesyIconMaterialCheerW100';

export default IconMaterialCheerW100;
