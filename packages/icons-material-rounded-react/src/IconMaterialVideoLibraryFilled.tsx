import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoLibraryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryFilled'

      short_name='VideoLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M701-535q14-9 14-25t-14-25L506-710q-15-10-30.5-1.5T460-685v250q0 18 15.5 26.5T506-410l195-125ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryFilled.displayName = 'OnesyIconMaterialVideoLibraryFilled';

export default IconMaterialVideoLibraryFilled;
