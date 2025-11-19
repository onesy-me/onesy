import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessChipFilled = (props: IIcon) => {

  return (
    <Icon
      name='BusinessChipFilled'

      short_name='BusinessChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h320v-240h-80v-80H400v80h-80v240Zm120-240v-40h80v40h-80ZM320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Z"/>
    </Icon>
  );
};

IconMaterialBusinessChipFilled.displayName = 'OnesyIconMaterialBusinessChipFilled';

export default IconMaterialBusinessChipFilled;
