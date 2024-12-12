import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSlideshow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Slideshow'

      short_name='Slideshow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m380-300 280-180-280-180v360ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialSlideshow.displayName = 'OnesyIconMaterialSlideshow';

export default IconMaterialSlideshow;
