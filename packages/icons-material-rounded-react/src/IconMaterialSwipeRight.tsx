import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRight'

      short_name='SwipeRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M473-80q-24 0-46-9t-39-26L212-292q-11-11-11.5-27.5T211-348l3-3q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v380q0 20-16 32t-35 7l-46-13 102 102q5 5 12.5 8.5T473-160h167q33 0 56.5-23.5T720-240v-160q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v160q0 66-47 113T640-80H473Zm47-480q17 0 28.5 11.5T560-520v120q0 17-11.5 28.5T520-360q-17 0-28.5-11.5T480-400v-120q0-17 11.5-28.5T520-560Zm120 40q17 0 28.5 11.5T680-480v80q0 17-11.5 28.5T640-360q-17 0-28.5-11.5T600-400v-80q0-17 11.5-28.5T640-520Zm156-220q-66-58-147-89t-169-31q-106 0-190 39.5T161-712q-8 14-20.5 23t-28.5 9q-12 0-18.5-10.5T92-713q42-93 148-150t240-57q94 0 181 31t159 90v-51q0-13 8.5-21.5T850-880q13 0 21.5 8.5T880-850v130q0 17-11.5 28.5T840-680H710q-13 0-21.5-8.5T680-710q0-13 8.5-21.5T710-740h86ZM571-280Z"/>
    </Icon>
  );
});

IconMaterialSwipeRight.displayName = 'OnesyIconMaterialSwipeRight';

export default IconMaterialSwipeRight;
