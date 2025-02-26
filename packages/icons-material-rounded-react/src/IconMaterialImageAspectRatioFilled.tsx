import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageAspectRatioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioFilled'

      short_name='ImageAspectRatio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm120-320q17 0 28.5-11.5T320-520q0-17-11.5-28.5T280-560q-17 0-28.5 11.5T240-520q0 17 11.5 28.5T280-480Zm160 0q17 0 28.5-11.5T480-520q0-17-11.5-28.5T440-560q-17 0-28.5 11.5T400-520q0 17 11.5 28.5T440-480Zm160 0q17 0 28.5-11.5T640-520q0-17-11.5-28.5T600-560q-17 0-28.5 11.5T560-520q0 17 11.5 28.5T600-480Zm0 160q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioFilled.displayName = 'OnesyIconMaterialImageAspectRatioFilled';

export default IconMaterialImageAspectRatioFilled;
