import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Php'

      short_name='Php'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-390v-180q0-13 8.5-21.5T150-600h110q24 0 42 18t18 42v40q0 24-18 42t-42 18h-80v50q0 13-8.5 21.5T150-360q-13 0-21.5-8.5T120-390Zm260 0v-180q0-13 8.5-21.5T410-600q13 0 21.5 8.5T440-570v50h80v-50q0-13 8.5-21.5T550-600q13 0 21.5 8.5T580-570v180q0 13-8.5 21.5T550-360q-13 0-21.5-8.5T520-390v-70h-80v70q0 13-8.5 21.5T410-360q-13 0-21.5-8.5T380-390Zm280 0v-180q0-13 8.5-21.5T690-600h110q24 0 42 18t18 42v40q0 24-18 42t-42 18h-80v50q0 13-8.5 21.5T690-360q-13 0-21.5-8.5T660-390ZM180-500h80v-40h-80v40Zm540 0h80v-40h-80v40Z"/>
    </Icon>
  );
});

IconMaterialPhp.displayName = 'OnesyIconMaterialPhp';

export default IconMaterialPhp;
