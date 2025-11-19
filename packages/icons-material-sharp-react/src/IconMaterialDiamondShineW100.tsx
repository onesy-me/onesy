import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamondShineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiamondShineW100'

      short_name='DiamondShine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-132 171-436l169-204h281l169 204-309 304ZM229-667l-77-76 20-20 77 76-20 20Zm238-53v-108h28v108h-28Zm264 53-19-20 76-76 20 20-77 76ZM481-171l258-253H222l259 253ZM353-612 220-452h521L608-612H353Z"/>
    </Icon>
  );
});

IconMaterialDiamondShineW100.displayName = 'OnesyIconMaterialDiamondShineW100';

export default IconMaterialDiamondShineW100;
