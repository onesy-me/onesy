import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPower = (props: IIcon) => {

  return (
    <Icon
      name='Power'

      short_name='Power'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-200h40v-74l140-140v-186H320v186l140 140v74Zm-80 80v-120L240-380v-300h80v-160h80v160h160v-160h80v160h80v300L580-240v120H380Zm100-280Z"/>
    </Icon>
  );
};

IconMaterialPower.displayName = 'OnesyIconMaterialPower';

export default IconMaterialPower;
