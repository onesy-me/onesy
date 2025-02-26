import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAzmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmW100'

      short_name='Azm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-165v-287H165l296-296h287v287L452-165Zm162-202 106-106v-247H473L367-614h247v247ZM480-233l106-106v-247H339L233-480h247v247Z"/>
    </Icon>
  );
});

IconMaterialAzmW100.displayName = 'OnesyIconMaterialAzmW100';

export default IconMaterialAzmW100;
