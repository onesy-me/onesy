import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrossword = (props: IIcon) => {

  return (
    <Icon
      name='Crossword'

      short_name='Crossword'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160h160v-160H400v160ZM160-400h160v-160H160v160Zm240 0h160v-160H400v160Zm240 0h160v-160H640v160Zm0-240h160v-160H640v160ZM320-80v-240H80v-320h480v-240h320v560H640v240H320Z"/>
    </Icon>
  );
};

IconMaterialCrossword.displayName = 'OnesyIconMaterialCrossword';

export default IconMaterialCrossword;
