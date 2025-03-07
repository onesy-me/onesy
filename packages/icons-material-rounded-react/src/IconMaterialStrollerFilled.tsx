import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrollerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrollerFilled'

      short_name='Stroller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80q-33 0-56.5-23.5T560-160q0-33 23.5-56.5T640-240q33 0 56.5 23.5T720-160q0 33-23.5 56.5T640-80Zm-400 0q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm57-200q-26 0-36.5-23t6.5-43l381-447q20-23 44.5-35t53.5-12q56 0 95 39t39 95v1q0 17-11.5 28.5T840-665q-17 0-28.5-11.5T800-705v-1q0-23-15.5-38.5T746-760q-11 0-19.5 4T711-744l-31 35v349q0 33-23.5 56.5T600-280H297Zm87-296L221-739q-13-13-10.5-30t17.5-26q40-22 83.5-33.5T400-840q45 0 88.5 11t83.5 33L384-576Z"/>
    </Icon>
  );
});

IconMaterialStrollerFilled.displayName = 'OnesyIconMaterialStrollerFilled';

export default IconMaterialStrollerFilled;
