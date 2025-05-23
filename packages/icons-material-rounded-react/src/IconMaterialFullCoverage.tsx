import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullCoverage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullCoverage'

      short_name='FullCoverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v440h560q17 0 28.5 11.5T760-160q0 17-11.5 28.5T720-120H160Zm160-160q-33 0-56.5-23.5T240-360v-440q0-17 11.5-28.5T280-840h600q17 0 28.5 11.5T920-800v440q0 33-23.5 56.5T840-280H320Zm0-80h520v-400H320v400Zm120-120h80q17 0 28.5-11.5T560-520v-120q0-17-11.5-28.5T520-680h-80q-17 0-28.5 11.5T400-640v120q0 17 11.5 28.5T440-480Zm200 0h80q17 0 28.5-11.5T760-520q0-17-11.5-28.5T720-560h-80q-17 0-28.5 11.5T600-520q0 17 11.5 28.5T640-480Zm0-120h80q17 0 28.5-11.5T760-640q0-17-11.5-28.5T720-680h-80q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600ZM320-360v-400 400Z"/>
    </Icon>
  );
});

IconMaterialFullCoverage.displayName = 'OnesyIconMaterialFullCoverage';

export default IconMaterialFullCoverage;
