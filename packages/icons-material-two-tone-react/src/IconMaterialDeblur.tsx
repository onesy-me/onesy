import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeblur = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Deblur'

      short_name='Deblur'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="6" cy="14" r="1"/><circle cx="6" cy="18" r="1"/><circle cx="6" cy="10" r="1"/><circle cx="3" cy="10" r=".5"/><circle cx="6" cy="6" r="1"/><circle cx="3" cy="14" r=".5"/><circle cx="10" cy="21" r=".5"/><circle cx="10" cy="3" r=".5"/><circle cx="10" cy="6" r="1"/><circle cx="10" cy="14" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="18" r="1"/><path d="M12,3v2c3.86,0,7,3.14,7,7s-3.14,7-7,7v2c4.96,0,9-4.04,9-9S16.96,3,12,3z"/><path d="M12,5v14c3.86,0,7-3.14,7-7S15.86,5,12,5z" opacity=".3"/></g></g>
    </Icon>
  );
});

IconMaterialDeblur.displayName = 'OnesyIconMaterialDeblur';

export default IconMaterialDeblur;
