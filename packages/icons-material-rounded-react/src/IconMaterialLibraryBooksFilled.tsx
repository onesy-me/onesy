import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryBooksFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooksFilled'

      short_name='LibraryBooks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-400h80q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480h-80q-17 0-28.5 11.5T400-440q0 17 11.5 28.5T440-400Zm0-120h240q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H440q-17 0-28.5 11.5T400-560q0 17 11.5 28.5T440-520Zm0-120h240q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H440q-17 0-28.5 11.5T400-680q0 17 11.5 28.5T440-640ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z"/>
    </Icon>
  );
});

IconMaterialLibraryBooksFilled.displayName = 'OnesyIconMaterialLibraryBooksFilled';

export default IconMaterialLibraryBooksFilled;
