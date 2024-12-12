import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataObjectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObjectW100'

      short_name='DataObject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M587-212v-28h133v-233h80v-14h-80v-233H587v-28h161v239h80v58h-80v239H587Zm-375 0v-239h-80v-58h80v-239h161v28H240v233h-80v14h80v233h133v28H212Z"/>
    </Icon>
  );
});

IconMaterialDataObjectW100.displayName = 'OnesyIconMaterialDataObjectW100';

export default IconMaterialDataObjectW100;
