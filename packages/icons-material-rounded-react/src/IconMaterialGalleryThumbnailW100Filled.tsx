import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGalleryThumbnailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnailW100Filled'

      short_name='GalleryThumbnail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M178-252q-24.75 0-42.37-17.63Q118-287.25 118-312v-336q0-24.75 17.63-42.38Q153.25-708 178-708h336q24.75 0 42.38 17.62Q574-672.75 574-648v336q0 24.75-17.62 42.37Q538.75-252 514-252H178Zm506.49-268q-13.49 0-21.99-8.5-8.5-8.5-8.5-21.99v-127.02q0-13.49 8.5-21.99 8.5-8.5 21.99-8.5h127.02q13.49 0 21.99 8.5 8.5 8.5 8.5 21.99v127.02q0 13.49-8.5 21.99-8.5 8.5-21.99 8.5H684.49ZM226-365h240q8.5 0 12.75-8t-.75-16l-65-87q-5-6-12-6t-12 6l-63 84-43-57q-5-6-12-6t-12 6l-45 60q-5 8-.75 16t12.75 8Zm458.49 113q-13.49 0-21.99-8.5-8.5-8.5-8.5-21.99v-127.02q0-13.49 8.5-21.99 8.5-8.5 21.99-8.5h127.02q13.49 0 21.99 8.5 8.5 8.5 8.5 21.99v127.02q0 13.49-8.5 21.99-8.5 8.5-21.99 8.5H684.49Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnailW100Filled.displayName = 'OnesyIconMaterialGalleryThumbnailW100Filled';

export default IconMaterialGalleryThumbnailW100Filled;
