import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGardenCartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GardenCartW100'

      short_name='GardenCart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-229q-20 0-32-13.5T252-276v-313.35L187-738h-57q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h56q9.08 0 16.65 5.04 7.57 5.04 11.35 12.96l52 120h504q17.13 0 26.06 14.5Q805-599 797-584l-91 179q35 2 58.5 27.6Q788-351.79 788-317q0 36.46-25.36 62.23Q737.27-229 700.95-229q-36.95 0-62.45-25.77T613-317q0-19.26 7-35.63T640-381l-204-18-94 140q-8 12-20.17 21-12.17 9-25.83 9Zm378-176 99-195H278l52 120q8.56 20 27.28 33.5T405-430l269 25ZM296-258q10 0 23-17l86-127q-38-5-63-21t-38-46l-24-56v249q0 8.18 4 13.09t12 4.91Zm404 2q26 0 43-17.5t17-42.5q0-26-17-43t-43-17q-25 0-42.5 17T640-316q0 25 17.5 42.5T700-256Zm-26-149-269-25 269 25Z"/>
    </Icon>
  );
});

IconMaterialGardenCartW100.displayName = 'OnesyIconMaterialGardenCartW100';

export default IconMaterialGardenCartW100;
