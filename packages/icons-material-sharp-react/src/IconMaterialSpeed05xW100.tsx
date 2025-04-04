import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeed05xW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed05xW100'

      short_name='Speed05x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-306v-28h28v28h-28Zm362 0 110-184-98-164h34l81 136 81-136h32l-97 162 111 186h-34l-94-157-94 157h-32Zm-268 0v-28h160v-132H266v-188h188v28H294v132h160v188H266Z"/>
    </Icon>
  );
});

IconMaterialSpeed05xW100.displayName = 'OnesyIconMaterialSpeed05xW100';

export default IconMaterialSpeed05xW100;
