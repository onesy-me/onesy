import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThunderstormW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormW100'

      short_name='Thunderstorm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m519-26 79-89-80-40 86-99h37l-79 89 80 40-86 99h-37Zm-240 0 79-89-80-40 86-99h37l-79 89 80 40-86 99h-37Zm21-320q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29-56 79.5-88T480-854q85 0 145.5 57T695-655q75 4 117 49.5T854-500q0 64-45 109t-109 45H300Zm0-28h400q52 0 89-37t37-89q0-52-37-89t-89-37h-34v-14q0-77-54.5-131.5T480-826q-56 0-102 30.5T309-714l-3 8h-8q-68 2-116 50t-48 116q0 69 48.5 117.5T300-374Zm180-226Z"/>
    </Icon>
  );
});

IconMaterialThunderstormW100.displayName = 'OnesyIconMaterialThunderstormW100';

export default IconMaterialThunderstormW100;
