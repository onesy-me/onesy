import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContrastSquareW100 = (props: IIcon) => {

  return (
    <Icon
      name='ContrastSquareW100'

      short_name='ContrastSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560L200-200Zm61-391h80v80h28v-80h80v-28h-80v-80h-28v80h-80v28Zm418 250H511v-28h168v28Z"/>
    </Icon>
  );
};

IconMaterialContrastSquareW100.displayName = 'OnesyIconMaterialContrastSquareW100';

export default IconMaterialContrastSquareW100;
