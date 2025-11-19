import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSimCardFilled = (props: IIcon) => {

  return (
    <Icon
      name='SimCardFilled'

      short_name='SimCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-200h80v-80h-80v80Zm0-160h80v-160h-80v160Zm160 160h80v-160h-80v160Zm0-240h80v-80h-80v80Zm160 240h80v-80h-80v80Zm0-160h80v-160h-80v160ZM160-80v-560l240-240h400v800H160Z"/>
    </Icon>
  );
};

IconMaterialSimCardFilled.displayName = 'OnesyIconMaterialSimCardFilled';

export default IconMaterialSimCardFilled;
