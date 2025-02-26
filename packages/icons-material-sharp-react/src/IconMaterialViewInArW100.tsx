import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewInArW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArW100'

      short_name='ViewInAr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-182 226-329v-296l254-147 254 147v296L480-182Zm-14-40v-248L254-590v244l212 124Zm28 0 212-124v-244L494-470v248ZM132-680v-148h148v28H160v120h-28Zm148 548H132v-148h28v120h120v28Zm400 0v-28h120v-120h28v148H680Zm120-548v-120H680v-28h148v148h-28ZM480-494l212-122-212-122-212 122 212 122Zm0 14Zm0-14Zm14 24Zm-28 0Z"/>
    </Icon>
  );
});

IconMaterialViewInArW100.displayName = 'OnesyIconMaterialViewInArW100';

export default IconMaterialViewInArW100;
