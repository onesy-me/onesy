import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSynagogueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueW100Filled'

      short_name='Synagogue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-614v-52q0-36 22-58t58-22q36 0 58 22t22 58v52H706Zm-612 0v-52q0-36 22-58t58-22q36 0 58 22t22 58v52H94Zm0 412v-384h160v412H122q-11 0-19.5-8.5T94-202Zm188 28v-424l180-155q4-4 8.57-5.5 4.58-1.5 9.5-1.5 4.93 0 9.43 1.5t8.5 5.5l180 155v424H574q-12.75 0-21.37-8.63Q544-191.25 544-204v-116q0-29-17.5-46.5T480-384q-29 0-46.5 17.5T416-320v116q0 12.75-8.62 21.37Q398.75-174 386-174H282Zm424 0v-412h160v384q0 11-8.5 19.5T838-174H706ZM480.24-520q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialSynagogueW100Filled.displayName = 'OnesyIconMaterialSynagogueW100Filled';

export default IconMaterialSynagogueW100Filled;
