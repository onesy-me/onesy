import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYakitoriW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YakitoriW100'

      short_name='Yakitori'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M829-112 663-278 527-142 388-281l55-54-78-78-55 54-138-138 54-55-98-98 82-81-98-98 20-19 98 98 81-83 98 100 55-55 138 138-54 55 78 78 54-55 139 139-136 136 165 165-19 20Zm-301-69 252-252-99-98-252 251 99 99Zm-64-174 143-143-79-78-143 143 79 78Zm-154-44 253-251-100-99-251 252 98 98Zm-64-172 144-144-79-78-143 143 78 79Zm359 215ZM496-465ZM388-574ZM279-682Z"/>
    </Icon>
  );
});

IconMaterialYakitoriW100.displayName = 'OnesyIconMaterialYakitoriW100';

export default IconMaterialYakitoriW100;
