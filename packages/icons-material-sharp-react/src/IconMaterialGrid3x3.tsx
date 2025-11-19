import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrid3x3 = (props: IIcon) => {

  return (
    <Icon
      name='Grid3x3'

      short_name='Grid3x3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160v-160H160v-80h160v-160H160v-80h160v-160h80v160h160v-160h80v160h160v80H640v160h160v80H640v160h-80v-160H400v160h-80Zm80-240h160v-160H400v160Z"/>
    </Icon>
  );
};

IconMaterialGrid3x3.displayName = 'OnesyIconMaterialGrid3x3';

export default IconMaterialGrid3x3;
