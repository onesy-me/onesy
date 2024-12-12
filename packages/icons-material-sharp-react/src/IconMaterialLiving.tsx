import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiving = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Living'

      short_name='Living'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm40-80h560v-306h-50v-174H250v174h-50v306Zm60-60v-200h80v120h280v-120h80v200H260Zm140-140v-118h-90v-102h340v102h-90v118H400ZM160-160v-640 640Z"/>
    </Icon>
  );
});

IconMaterialLiving.displayName = 'OnesyIconMaterialLiving';

export default IconMaterialLiving;
