import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEda = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Eda'

      short_name='Eda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-480v-400h80v400h-80Zm160 0v-440h80v440h-80Zm160 163v-523h80v476l-80 47ZM200-120h363l194-194-287 167-130-173H200v200Zm-80 80v-360h260l110 147 190-111 136-78 105 78L597-40H120Zm80-360h-80v-400h80v400Zm0-80h400-400Zm0 360h363-363Z"/>
    </Icon>
  );
});

IconMaterialEda.displayName = 'OnesyIconMaterialEda';

export default IconMaterialEda;
