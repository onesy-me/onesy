import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlurOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurOn'

      short_name='BlurOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><circle cx="14" cy="10" r="1.5"/><circle cx="14" cy="18" r="1"/><circle cx="14" cy="14" r="1.5"/><circle cx="14" cy="6" r="1"/><path d="M3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5zM21 14.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"/><circle cx="18" cy="18" r="1"/><path d="M13.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5zM21 10.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"/><circle cx="18" cy="14" r="1"/><circle cx="18" cy="6" r="1"/><circle cx="6" cy="18" r="1"/><circle cx="6" cy="14" r="1"/><path d="M3.5 14c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5z"/><circle cx="10" cy="6" r="1"/><circle cx="6" cy="10" r="1"/><circle cx="6" cy="6" r="1"/><path d="M9.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z"/><circle cx="10" cy="18" r="1"/><path d="M10.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5z"/><circle cx="10" cy="14" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="18" cy="10" r="1"/>
    </Icon>
  );
});

IconMaterialBlurOn.displayName = 'OnesyIconMaterialBlurOn';

export default IconMaterialBlurOn;
