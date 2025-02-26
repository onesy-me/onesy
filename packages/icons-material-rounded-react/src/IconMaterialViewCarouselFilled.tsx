import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCarouselFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselFilled'

      short_name='ViewCarousel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-360v-240q0-33 23.5-56.5T160-680q33 0 56.5 23.5T240-600v240q0 33-23.5 56.5T160-280q-33 0-56.5-23.5T80-360Zm280 160q-33 0-56.5-23.5T280-280v-400q0-33 23.5-56.5T360-760h240q33 0 56.5 23.5T680-680v400q0 33-23.5 56.5T600-200H360Zm360-160v-240q0-33 23.5-56.5T800-680q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280q-33 0-56.5-23.5T720-360Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselFilled.displayName = 'OnesyIconMaterialViewCarouselFilled';

export default IconMaterialViewCarouselFilled;
