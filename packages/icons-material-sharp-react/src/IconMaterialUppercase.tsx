import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUppercase = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Uppercase'

      short_name='Uppercase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-240v-248l-64 64-56-56 160-160 160 160-56 56-64-64v248h-80Zm-540 0 165-440h79l165 440h-76l-39-113H236l-40 113h-76Zm139-177h131l-65-182h-4l-62 182Z"/>
    </Icon>
  );
});

IconMaterialUppercase.displayName = 'OnesyIconMaterialUppercase';

export default IconMaterialUppercase;
