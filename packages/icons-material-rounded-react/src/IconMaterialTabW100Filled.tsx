import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='TabW100Filled'

      short_name='Tab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm358-348h250v-128q0-12-10-22t-22-10H520v130q0 13 8.5 21.5T550-560Z"/>
    </Icon>
  );
};

IconMaterialTabW100Filled.displayName = 'OnesyIconMaterialTabW100Filled';

export default IconMaterialTabW100Filled;
