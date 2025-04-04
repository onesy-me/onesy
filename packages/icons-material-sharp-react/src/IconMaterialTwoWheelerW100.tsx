import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTwoWheelerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoWheelerW100'

      short_name='TwoWheeler'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-226q-56 0-95-39t-39-95q0-56 39-95t95-39h38l-74-62H26v-28h130l122 72 166-62h176L516-706h-90v-28h104l72 92 114-36v54H616l116 148q15-10 32.5-14t35.5-4q56 0 95 39t39 95q0 56-39 95t-95 39q-56 0-95-39t-39-95q0-29 11.5-54t32.5-44l-56-72-146 224h-98L294-406v46q0 56-39 95t-95 39Zm0-28q45 0 75.5-30.5T266-360q0-45-30.5-75.5T160-466q-45 0-75.5 30.5T54-360q0 45 30.5 75.5T160-254Zm290-292-190 70 190-70h182-182Zm350 292q45 0 75.5-30.5T906-360q0-45-30.5-75.5T800-466q-45 0-75.5 30.5T694-360q0 45 30.5 75.5T800-254Zm-308-80 140-212H450l-190 70 160 142h72Z"/>
    </Icon>
  );
});

IconMaterialTwoWheelerW100.displayName = 'OnesyIconMaterialTwoWheelerW100';

export default IconMaterialTwoWheelerW100;
