import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReadMore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMore'

      short_name='ReadMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m298-262-56-56 121-122H80v-80h283L242-642l56-56 218 218-218 218Zm222-18v-80h360v80H520Zm0-320v-80h360v80H520Zm120 160v-80h240v80H640Z"/>
    </Icon>
  );
});

IconMaterialReadMore.displayName = 'OnesyIconMaterialReadMore';

export default IconMaterialReadMore;
