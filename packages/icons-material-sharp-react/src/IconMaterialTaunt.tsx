import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaunt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Taunt'

      short_name='Taunt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M218-381q-24 13-51 5.5T126-406q-17-29-6-60t43-42l337-112 36 71-318 168Zm22 261v-227l349-184-17-35 228-114 36 72-276 208v280H240Zm60-440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Z"/>
    </Icon>
  );
});

IconMaterialTaunt.displayName = 'OnesyIconMaterialTaunt';

export default IconMaterialTaunt;
