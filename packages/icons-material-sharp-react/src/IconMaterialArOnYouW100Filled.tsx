import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArOnYouW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArOnYouW100Filled'

      short_name='ArOnYou'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.84-748Q592-748 670-670.16t78 190Q748-368 670.16-290t-190 78Q368-212 290-289.84t-78-190Q212-592 289.84-670t190-78Zm.16 388q41 0 75-21.5t51-58.5H354q17 37 51 58.5t75 21.5ZM354-559.82q0 12.82 8.68 21.32 8.67 8.5 21.5 8.5 12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5Zm192 0q0 12.82 8.68 21.32 8.67 8.5 21.5 8.5 12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5ZM92-720v-148h148v28H120v120H92Zm0 628v-148h28v120h120v28H92Zm628-10v-28h120v-120h28v148H720Zm120-618v-120H720v-28h148v148h-28Z"/>
    </Icon>
  );
});

IconMaterialArOnYouW100Filled.displayName = 'OnesyIconMaterialArOnYouW100Filled';

export default IconMaterialArOnYouW100Filled;
