import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieInfo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieInfo'

      short_name='MovieInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720h800v720H80Zm80-80h80v-80h-80v80Zm560 0h80v-80h-80v80Zm-280-80h80v-240h-80v240Zm-280-80h80v-80h-80v80Zm560 0h80v-80h-80v80ZM160-520h80v-80h-80v80Zm560 0h80v-80h-80v80Zm-240-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm-320-80h80v-80h-80v80Zm560 0h80v-80h-80v80ZM320-200h320v-560H320v560Zm0-560h320-320Z"/>
    </Icon>
  );
});

IconMaterialMovieInfo.displayName = 'OnesyIconMaterialMovieInfo';

export default IconMaterialMovieInfo;
