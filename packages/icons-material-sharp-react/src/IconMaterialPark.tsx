import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPark = (props: IIcon) => {

  return (
    <Icon
      name='Park'

      short_name='Park'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M558-80H402v-160H120l160-240h-80l280-400 280 400h-80l160 240H558v160ZM270-320h160-76 252-76 160-420Zm0 0h420L530-560h76L480-740 354-560h76L270-320Z"/>
    </Icon>
  );
};

IconMaterialPark.displayName = 'OnesyIconMaterialPark';

export default IconMaterialPark;
