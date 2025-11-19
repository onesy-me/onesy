import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoneyFilled = (props: IIcon) => {

  return (
    <Icon
      name='MoneyFilled'

      short_name='Money'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-320h200v-320H560v320Zm80-80v-160h40v160h-40Zm-320 80h200v-320H320v320Zm80-80v-160h40v160h-40Zm-200 80h80v-320h-80v320ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialMoneyFilled.displayName = 'OnesyIconMaterialMoneyFilled';

export default IconMaterialMoneyFilled;
