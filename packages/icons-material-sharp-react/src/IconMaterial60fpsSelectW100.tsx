import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial60fpsSelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSelectW100'

      short_name='60fpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M218-452v-296h202v28H246v106h174v162H218Zm28-28h146v-106H246v106Zm294 28v-296h202v296H540Zm28-28h146v-240H568v240ZM164-106v-148h28v148h-28Zm128 0v-148h28v148h-28Zm128 0v-148h28v148h-28Zm128 0v-148h248v148H548Z"/>
    </Icon>
  );
});

IconMaterial60fpsSelectW100.displayName = 'OnesyIconMaterial60fpsSelectW100';

export default IconMaterial60fpsSelectW100;
