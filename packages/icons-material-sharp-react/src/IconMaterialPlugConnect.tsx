import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlugConnect = (props: IIcon) => {

  return (
    <Icon
      name='PlugConnect'

      short_name='PlugConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-40H120v-240H40v-80h80v-240h160v-40h80v640h-80Zm-80-120h80v-400h-80v400Zm400 120v-160H440v-80h160v-160H440v-80h160v-160h80v40h160v240h80v80h-80v240H680v40h-80Zm80-120h80v-400h-80v400ZM280-480Zm400 0Z"/>
    </Icon>
  );
};

IconMaterialPlugConnect.displayName = 'OnesyIconMaterialPlugConnect';

export default IconMaterialPlugConnect;
