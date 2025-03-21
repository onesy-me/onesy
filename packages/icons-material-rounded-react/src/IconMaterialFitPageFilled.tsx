import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPageFilled'

      short_name='FitPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-640q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800v640q0 17-11.5 28.5T160-120q-17 0-28.5-11.5T120-160Zm640 0v-640q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800v640q0 17-11.5 28.5T800-120q-17 0-28.5-11.5T760-160ZM480-600q-17 0-28.5-11.5T440-640q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640q0 17-11.5 28.5T480-600ZM320-440q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440Zm160 0q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm160 0q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440ZM480-280q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm0-480q-17 0-28.5-11.5T440-800q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760Zm0 640q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialFitPageFilled.displayName = 'OnesyIconMaterialFitPageFilled';

export default IconMaterialFitPageFilled;
