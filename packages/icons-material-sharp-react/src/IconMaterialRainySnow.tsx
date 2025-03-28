import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRainySnow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainySnow'

      short_name='RainySnow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m302-186-96-192 72-36 96 191-72 37Zm360 0L446-618l72-36 216 431-72 37Zm-152-14q-17 0-28.5-11.5T470-240q0-17 11.5-28.5T510-280q17 0 28.5 11.5T550-240q0 17-11.5 28.5T510-200Zm352 14-56-112 72-36 55 112-71 36ZM422-306 206-738l72-35 215 431-71 36Zm378-54q-17 0-28.5-11.5T760-400q0-17 11.5-28.5T800-440q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360Zm-600-80q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520q17 0 28.5 11.5T240-480q0 17-11.5 28.5T200-440Zm522-26L586-738l72-36 135 272-71 36Zm-600-80L26-738l72-35 95 191-71 36Zm328-134q-17 0-28.5-11.5T410-720q0-17 11.5-28.5T450-760q17 0 28.5 11.5T490-720q0 17-11.5 28.5T450-680Z"/>
    </Icon>
  );
});

IconMaterialRainySnow.displayName = 'OnesyIconMaterialRainySnow';

export default IconMaterialRainySnow;
