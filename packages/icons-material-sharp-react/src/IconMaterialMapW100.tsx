import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapW100'

      short_name='Map'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-176-240-84-188 73v-533l188-64 240 84 188-73v536l-188 61Zm-14-34v-468l-212-74v468l212 74Zm28 0 146-48v-474l-146 54v468Zm-414-18 146-56v-468l-146 50v474Zm414-450v468-468Zm-268-74v468-468Z"/>
    </Icon>
  );
});

IconMaterialMapW100.displayName = 'OnesyIconMaterialMapW100';

export default IconMaterialMapW100;
