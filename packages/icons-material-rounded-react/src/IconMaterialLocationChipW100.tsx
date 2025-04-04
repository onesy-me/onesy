import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationChipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationChipW100'

      short_name='LocationChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-510q0 51 33 91t71 75q38-35 71-75t33-91q0-43.2-30.36-73.6-30.36-30.4-73.5-30.4t-73.64 30.4Q376-553.2 376-510Zm104 30q-17 0-28.5-11.5T440-520q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520q0 17-11.5 28.5T480-480ZM320-252q-95.27 0-161.64-66.31Q92-384.62 92-479.81t66.36-161.69Q224.73-708 320-708h320q95.27 0 161.64 66.31Q868-575.38 868-480.19T801.64-318.5Q735.27-252 640-252H320Zm0-28h320q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680H320q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm160-200Z"/>
    </Icon>
  );
});

IconMaterialLocationChipW100.displayName = 'OnesyIconMaterialLocationChipW100';

export default IconMaterialLocationChipW100;
