import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial60fpsSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSelect'

      short_name='60fpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400q-33 0-56.5-23.5T160-480v-240q0-33 23.5-56.5T240-800h160q17 0 28.5 11.5T440-760q0 17-11.5 28.5T400-720H240v80h120q33 0 56.5 23.5T440-560v80q0 33-23.5 56.5T360-400H240Zm0-80h120v-80H240v80Zm360 80q-33 0-56.5-23.5T520-480v-240q0-33 23.5-56.5T600-800h120q33 0 56.5 23.5T800-720v240q0 33-23.5 56.5T720-400H600Zm0-80h120v-240H600v240ZM160-80q-17 0-28.5-11.5T120-120v-120q0-17 11.5-28.5T160-280q17 0 28.5 11.5T200-240v120q0 17-11.5 28.5T160-80Zm160 0q-17 0-28.5-11.5T280-120v-120q0-17 11.5-28.5T320-280q17 0 28.5 11.5T360-240v120q0 17-11.5 28.5T320-80Zm160 0q-17 0-28.5-11.5T440-120v-120q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240v120q0 17-11.5 28.5T480-80Zm160 0q-17 0-28.5-11.5T600-120v-120q0-17 11.5-28.5T640-280h160q17 0 28.5 11.5T840-240v120q0 17-11.5 28.5T800-80H640Z"/>
    </Icon>
  );
});

IconMaterial60fpsSelect.displayName = 'OnesyIconMaterial60fpsSelect';

export default IconMaterial60fpsSelect;
