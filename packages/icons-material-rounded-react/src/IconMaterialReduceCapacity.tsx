import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReduceCapacity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReduceCapacity'

      short_name='ReduceCapacity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H120Zm400 0v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H520ZM280-240q-33 0-56.5-23.5T200-320q0-33 23.5-56.5T280-400q33 0 56.5 23.5T360-320q0 33-23.5 56.5T280-240Zm400 0q-33 0-56.5-23.5T600-320q0-33 23.5-56.5T680-400q33 0 56.5 23.5T760-320q0 33-23.5 56.5T680-240ZM510-435l27-27q9-8 21-8t21 9q9 9 9 21t-9 21l-71 71q-12 12-28 12t-28-12l-71-71q-9-9-9-21t9-21q9-9 21-8.5t21 8.5l27 26v-55q0-13 8.5-21.5T480-520q13 0 21.5 8.5T510-490v55ZM80-560v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q20 0 39.5 3t37.5 8q-17 17-27 39t-10 47v23H80Zm240 0v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H320Zm360 0v-23q0-25-10-47t-27-39q18-5 37.5-8t39.5-3q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H680ZM240-720q-33 0-56.5-23.5T160-800q0-33 23.5-56.5T240-880q33 0 56.5 23.5T320-800q0 33-23.5 56.5T240-720Zm240 0q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Zm240 0q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720Z"/>
    </Icon>
  );
});

IconMaterialReduceCapacity.displayName = 'OnesyIconMaterialReduceCapacity';

export default IconMaterialReduceCapacity;
