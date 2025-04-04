import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyringe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Syringe'

      short_name='Syringe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m185-685-57-56 137-137 56 57-40 40 43 43 141-141 57 57-56 55 351 351-84 86 189 188H808L676-274l-84 86-352-352-55 54-56-56 139-140-43-43-40 40Zm111 89 295 295 113-114-60-61-85 84-55-56 84-84-60-60-84 83-56-56 83-84-61-61-114 114Zm0 0 114-114-114 114Z"/>
    </Icon>
  );
});

IconMaterialSyringe.displayName = 'OnesyIconMaterialSyringe';

export default IconMaterialSyringe;
