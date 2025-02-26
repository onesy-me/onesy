import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStyleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStyleW100'

      short_name='LineStyle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-250v-28h28v28h-28Zm0-108v-28h113v28H250Zm0-108v-28h190v28H250Zm0-108v-136h460v136H250Zm108 324v-28h28v28h-28Zm65-108v-28h113v28H423Zm43 108v-28h28v28h-28Zm54-216v-28h190v28H520Zm54 216v-28h28v28h-28Zm22-108v-28h114v28H596Zm86 108v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialLineStyleW100.displayName = 'OnesyIconMaterialLineStyleW100';

export default IconMaterialLineStyleW100;
