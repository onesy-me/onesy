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
      <path d="M363-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h243l-93-94q-11-11-11.5-27.5T270-670q11-11 28-11t28 11l162 162q12 12 12 28t-12 28L326-290q-11 11-27.5 11.5T270-290q-11-11-11-28t11-28l93-94Zm197 160q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h280q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280H560Zm0-320q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h280q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600H560Zm120 160q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520h160q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H680Z"/>
    </Icon>
  );
});

IconMaterialReadMore.displayName = 'OnesyIconMaterialReadMore';

export default IconMaterialReadMore;
