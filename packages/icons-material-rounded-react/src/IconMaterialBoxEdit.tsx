import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEdit'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-720h528l-34-40H250l-34 40Zm184 270 80-40 80 40v-190H400v190ZM200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v114q0 17-11.5 28.5T800-545q-17 0-28.5-11.5T760-585v-55H640v205l-77 77-83-42-102 51q-20 10-39-1.5T320-385v-255H200v440h240q17 0 28.5 11.5T480-160q0 17-11.5 28.5T440-120H200Zm440-520h120-120Zm-440 0h363-363Zm360 480v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L695-132q-6 6-13.5 9t-15.5 3h-66q-17 0-28.5-11.5T560-160Zm300-223-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
    </Icon>
  );
});

IconMaterialBoxEdit.displayName = 'OnesyIconMaterialBoxEdit';

export default IconMaterialBoxEdit;
