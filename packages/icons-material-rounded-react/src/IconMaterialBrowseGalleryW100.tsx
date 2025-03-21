import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseGalleryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseGalleryW100'

      short_name='BrowseGallery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-485.38V-640q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v153q0 5.57 2 10.78 2 5.22 7 10.22l108 108q4 4 9.5 3.5t9.5-4.5q4-4 4-9.67 0-5.66-4-9.33L374-485.38ZM880-480q0-78-39-143T734-725q-5.83-3.07-7.92-8.54-2.08-5.46-.21-11.27Q728-751 734.5-752q6.5-1 12.5 2 74 42 117.5 113.5T908-480q0 85-43.5 156.5T748-210q-6 4-12.5 2.5t-9.7-7.69q-2.8-5.81-.51-11.27 2.29-5.47 8.71-8.54 68-37 107-102t39-143ZM360.06-172Q296-172 240-196t-98-66q-42-42-66-97.94-24-55.95-24-120Q52-544 76-600t66-98q42-42 97.94-66 55.95-24 120-24Q424-788 480-764t98 66q42 42 66 97.94 24 55.95 24 120Q668-416 644-360t-66 98q-42 42-97.94 66-55.95 24-120 24Zm-.06-28q117 0 198.5-81.5T640-480q0-117-81.5-198.5T360-760q-117 0-198.5 81.5T80-480q0 117 81.5 198.5T360-200Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialBrowseGalleryW100.displayName = 'OnesyIconMaterialBrowseGalleryW100';

export default IconMaterialBrowseGalleryW100;
