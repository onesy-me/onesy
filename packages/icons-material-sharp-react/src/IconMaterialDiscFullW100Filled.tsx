import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiscFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscFullW100Filled'

      short_name='DiscFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M464-132q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q116-407.65 116-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q391.79-828 464-828q106.04 0 193.52 58T786-614h-56v358q-51 58-120 91t-146 33Zm0-220q54 0 91-37t37-91q0-54-37-91t-91-37q-54 0-91 37t-37 91q0 54 37 91t91 37Zm0-88q-17 0-28.5-11.5T424-480q0-17 11.5-28.5T464-520q17 0 28.5 11.5T504-480q0 17-11.5 28.5T464-440Zm360 290q-8.5 0-14.25-5.75T804-170q0-8.5 5.75-14.25T824-190q8.5 0 14.25 5.75T844-170q0 8.5-5.75 14.25T824-150Zm-14-90v-294h28v294h-28Z"/>
    </Icon>
  );
});

IconMaterialDiscFullW100Filled.displayName = 'OnesyIconMaterialDiscFullW100Filled';

export default IconMaterialDiscFullW100Filled;
