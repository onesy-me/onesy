import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReadMoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMoreW100'

      short_name='ReadMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m298-299-19-19 146-148H132v-28h293L279-642l19-19 181 181-181 181Zm218-19v-28h312v28H516Zm0-296v-28h312v28H516Zm120 148v-28h192v28H636Z"/>
    </Icon>
  );
});

IconMaterialReadMoreW100.displayName = 'OnesyIconMaterialReadMoreW100';

export default IconMaterialReadMoreW100;
