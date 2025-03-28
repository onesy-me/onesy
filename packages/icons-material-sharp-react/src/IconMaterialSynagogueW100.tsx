import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSynagogueW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueW100'

      short_name='Synagogue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M66-146v-534q0-39.17 27.38-66.58Q120.76-774 159.88-774q39.12 0 66.62 27.42Q254-719.17 254-680v69l226-195 226 195v-69q0-39.17 27.38-66.58Q760.76-774 799.88-774q39.12 0 66.62 27.42Q894-719.17 894-680v534H546v-240H414v240H66Zm668-468h132v-66q0-27-19.5-46.5T800-746q-27 0-46.5 19.5T734-680v66Zm-640 0h132v-66q0-27-19.5-46.5T160-746q-27 0-46.5 19.5T94-680v66Zm0 440h132v-412H94v412Zm160 0h132v-240h188v240h132v-400L480-769 254-574v400Zm480 0h132v-412H734v412ZM479.76-520q-16.76 0-28.26-11.74-11.5-11.73-11.5-28.5 0-16.76 11.74-28.26 11.73-11.5 28.5-11.5 16.76 0 28.26 11.74 11.5 11.73 11.5 28.5 0 16.76-11.74 28.26-11.73 11.5-28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialSynagogueW100.displayName = 'OnesyIconMaterialSynagogueW100';

export default IconMaterialSynagogueW100;
