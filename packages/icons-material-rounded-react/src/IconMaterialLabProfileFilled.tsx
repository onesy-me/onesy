import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabProfileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileFilled'

      short_name='LabProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-480h240q17 0 28.5-11.5T640-520q0-17-11.5-28.5T600-560H360q-17 0-28.5 11.5T320-520q0 17 11.5 28.5T360-480Zm0-160h240q17 0 28.5-11.5T640-680q0-17-11.5-28.5T600-720H360q-17 0-28.5 11.5T320-680q0 17 11.5 28.5T360-640Zm438 499L636-352q-17-23-42-35.5T540-400H160v-400q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 5-.5 9.5T798-141ZM240-80q-33 0-56.5-23.5T160-160v-160h380q10 0 18.5 4.5T573-303L741-83q-5 2-10.5 2.5T720-80H240Z"/>
    </Icon>
  );
});

IconMaterialLabProfileFilled.displayName = 'OnesyIconMaterialLabProfileFilled';

export default IconMaterialLabProfileFilled;
