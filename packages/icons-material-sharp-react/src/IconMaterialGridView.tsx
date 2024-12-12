import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridView = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridView'

      short_name='GridView'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/>
    </Icon>
  );
});

IconMaterialGridView.displayName = 'OnesyIconMaterialGridView';

export default IconMaterialGridView;
