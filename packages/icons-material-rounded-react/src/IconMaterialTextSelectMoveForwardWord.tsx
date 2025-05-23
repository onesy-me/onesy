import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectMoveForwardWord = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveForwardWord'

      short_name='TextSelectMoveForwardWord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h80v-560h-80v560Zm-80 0v-560q0-33 23.5-56.5T200-840h80q33 0 56.5 23.5T360-760v560q0 33-23.5 56.5T280-120h-80q-33 0-56.5-23.5T120-200Zm567-240H480q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520h207l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L708-348q-11 11-27.5 11.5T652-348q-11-11-11-28t11-28l35-36ZM480-760q-17 0-28.5-11.5T440-800q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760Zm160 0q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760Zm160 0q-17 0-28.5-11.5T760-800q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760ZM480-120q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120Zm160 0q-17 0-28.5-11.5T760-160q0-17 11.5-28.5T800-200q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120Zm-600-80h80-80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveForwardWord.displayName = 'OnesyIconMaterialTextSelectMoveForwardWord';

export default IconMaterialTextSelectMoveForwardWord;
