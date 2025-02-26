import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsHockey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHockey'

      short_name='SportsHockey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-160h80v160H80Zm120 0v-160h160l34-78 64 140-44 98H200Zm600 0v-160h80v160h-80Zm-40 0H546L254-800h134l92 208 92-208h134L544-446l56 126h160v160Z"/>
    </Icon>
  );
});

IconMaterialSportsHockey.displayName = 'OnesyIconMaterialSportsHockey';

export default IconMaterialSportsHockey;
