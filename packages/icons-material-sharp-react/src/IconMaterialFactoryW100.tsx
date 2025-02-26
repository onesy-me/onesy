import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactoryW100'

      short_name='Factory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-394l176-75v78l200-80v95h320v376H132Zm28-28h640v-320H480v-82l-200 80v-78l-120 53v347Zm292-104h56v-112h-56v112Zm-160 0h56v-112h-56v112Zm320 0h56v-112h-56v112Zm216-244H726l40-280h28l34 280ZM160-160h640-640Z"/>
    </Icon>
  );
});

IconMaterialFactoryW100.displayName = 'OnesyIconMaterialFactoryW100';

export default IconMaterialFactoryW100;
