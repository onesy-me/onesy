import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairW100Filled'

      short_name='Chair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M188-206v-54H92v-308h108v174h560v-174h108v308h-96v54h-26v-54H216v54h-28Zm40-216v-174h-68v-128h640v128h-68v174H228Z"/>
    </Icon>
  );
});

IconMaterialChairW100Filled.displayName = 'OnesyIconMaterialChairW100Filled';

export default IconMaterialChairW100Filled;
